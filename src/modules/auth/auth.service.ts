import prisma from "../../lib/prisma";
import { ApiError } from "../../utils/ApiError";
import { comparePassword, hashPassword } from "../../utils/hash";
import {
  issueTokenPair,
  verifyRefreshToken,
  type JwtPayload,
} from "../../utils/jwt";
import { Role } from "../../../generated/prisma/enums";
import type {
  IAuthResult,
  ILoginPayload,
  IRegisterPayload,
  ISafeUser,
} from "./auth.interface";

const sanitizeUser = (user: {
  id: string;
  email: string;
  role: Role;
  isActive: boolean;
}): ISafeUser => ({
  id: user.id,
  email: user.email,
  role: user.role,
  isActive: user.isActive,
});

/** Simple placeholder generator — swap for a real roll-number scheme. */
const generateStudentId = () => `STU-${Date.now().toString(36).toUpperCase()}`;

const registerStudent = async (
  payload: IRegisterPayload
): Promise<IAuthResult> => {
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw ApiError.conflict("An account with this email already exists");
  }

  const program = await prisma.program.findFirst({
    where: { id: payload.programId, deletedAt: null },
  });

  if (!program) {
    throw ApiError.notFound("Program not found");
  }

  const hashedPassword = await hashPassword(payload.password);

  const user = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
        role: Role.STUDENT,
      },
    });

    await tx.studentProfile.create({
      data: {
        userId: createdUser.id,
        studentId: payload.studentId ?? generateStudentId(),
        programId: payload.programId,
        phone: payload.phone,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth
          ? new Date(payload.dateOfBirth)
          : undefined,
      },
    });

    await tx.transcript.create({
      data: {
        studentId: createdUser.id,
      },
    });

    return createdUser;
  });

  const tokenPayload: JwtPayload = { userId: user.id, role: user.role };
  const tokens = issueTokenPair(tokenPayload);

  return { user: sanitizeUser(user), tokens };
};

const loginUser = async (payload: ILoginPayload): Promise<IAuthResult> => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user || user.deletedAt) {
    throw ApiError.unauthorized("Invalid email or password");
  }

  if (!user.isActive) {
    throw ApiError.forbidden("This account has been deactivated");
  }

  const isPasswordValid = await comparePassword(payload.password, user.password);

  if (!isPasswordValid) {
    throw ApiError.unauthorized("Invalid email or password");
  }

  const tokenPayload: JwtPayload = { userId: user.id, role: user.role };
  const tokens = issueTokenPair(tokenPayload);

  return { user: sanitizeUser(user), tokens };
};

const refreshAccessToken = async (
  incomingRefreshToken: string | undefined
): Promise<IAuthResult["tokens"]> => {
  if (!incomingRefreshToken) {
    throw ApiError.unauthorized("Refresh token is missing");
  }

  let decoded: JwtPayload;
  try {
    decoded = verifyRefreshToken(incomingRefreshToken);
  } catch {
    throw ApiError.unauthorized("Invalid or expired refresh token");
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
  });

  if (!user || user.deletedAt) {
    throw ApiError.unauthorized("User no longer exists");
  }

  if (!user.isActive) {
    throw ApiError.forbidden("This account has been deactivated");
  }

  // Rotate both tokens on every refresh.
  return issueTokenPair({ userId: user.id, role: user.role });
};

export const AuthService = {
  registerStudent,
  loginUser,
  refreshAccessToken,
};
