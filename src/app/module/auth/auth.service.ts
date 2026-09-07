import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import type { JwtPayload, SignOptions } from "jsonwebtoken";
import { Role } from "../../../../generated/prisma/enums";
import config from "../../config";
import { AppError } from "../../utils/AppError";
import { jwtUtils } from "../../utils/jwt";
import type { ILoginPayload, IRegisterStudentPayload } from "./auth.interface";
import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../lib/prisma"; //capital prisma is the generated client, lowercase prisma is the instance of the client


/** Placeholder generator — swap for a real roll-number scheme. */
const generateStudentId = () => `STU-${Date.now().toString(36).toUpperCase()}`;



const issueTokens = (jwtPayload: JwtPayload) => {
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_secret,
    config.jwt_access_expires_in as SignOptions
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_secret,
    config.jwt_refresh_expires_in as SignOptions
  );

  return { accessToken, refreshToken };
};





const registerStudent = async (payload: IRegisterStudentPayload) => {
  const email = payload.email.trim().toLowerCase();

  const isUserExist = await prisma.user.findUnique({ where: { email } });

  if (isUserExist) {
    throw new AppError(httpStatus.CONFLICT, "An account with this email already exists");
  }

  // departmentName is validated against the Department enum (CSE/EEE/CIVIL)
  // by the Zod schema before this runs — no DB lookup needed, it's a fixed enum.
  //example:
  //const department = await prisma.department.findUnique({
  //  where: { name: payload.departmentName },
  //});
  //if (!department) {
  //  throw new AppError(httpStatus.NOT_FOUND, "Department not found");
  //}



  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds) || 10
  );

  const user = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const createdUser = await tx.user.create({
      data: {
        email,
        name: payload.name,
        password: hashedPassword,
        role: Role.STUDENT,
      },
    });

    const createdStudentProfile=await tx.studentProfile.create({
      data: {
        userId: createdUser.id,
        studentId: payload.studentId ?? generateStudentId(),
        department: payload.departmentName,
        phone: payload.phone,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth ? new Date(payload.dateOfBirth) : undefined,
      },
    });

    await tx.transcript.create({
      data: { studentId: createdStudentProfile.id },
    });

    return createdUser;
  });

  const jwtPayload = { userId: user.id, name: user.name, role: user.role };
  const { accessToken, refreshToken } = issueTokens(jwtPayload);

  return {
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
    accessToken,
    refreshToken,
  };
};






const loginUser = async (payload: ILoginPayload) => {
  const email = payload.email.trim().toLowerCase();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.deletedAt) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid email or password");
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "This account has been deactivated");
  }

  const isPasswordMatched = await bcrypt.compare(payload.password, user.password);

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid email or password");
  }

  const jwtPayload = { userId: user.id, name: user.name, role: user.role };
  const { accessToken, refreshToken } = issueTokens(jwtPayload);

  return {
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
    accessToken,
    refreshToken,
  };
};





const getMe = async (requestUser: { userId: string }) => {
  const user = await prisma.user.findUnique({
    where: { id: requestUser.userId },
    include: { studentProfile: true, facultyProfile: true },
    omit: { password: true },
  });

  if (!user || user.deletedAt) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};




const refreshToken = async (token: string) => {
  const verified = jwtUtils.verifyToken(token, config.jwt_refresh_secret);

  if (!verified.success || !verified.data) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      config.node_env === "development" ? verified.error : "Invalid refresh token"
    );
  }

  const data = verified.data as JwtPayload;

  const user = await prisma.user.findUnique({ where: { id: data.userId } });

  if (!user || user.deletedAt || !user.isActive) {
    throw new AppError(httpStatus.UNAUTHORIZED, "User is inactive or not found");
  }

  // Rotate both tokens on every refresh.
  return issueTokens({ userId: user.id, name: user.name, role: user.role });
};




export const AuthService = {
  registerStudent,
  loginUser,
  getMe,
  refreshToken,
};
