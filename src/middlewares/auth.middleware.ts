import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";
import { verifyAccessToken } from "../utils/jwt";
import  prisma  from "../lib/prisma";

/**
 * Verifies the Bearer access token, loads the user, and attaches a
 * trimmed-down `req.user` object for downstream middleware/controllers.
 */
export const auth = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "Authentication token is missing");
    }

    const token = authHeader.split(" ")[1];
    
    if (!token) {
      throw new ApiError(401, "Authentication token is missing");
    }

    let decoded: { userId: string };
    try {
      decoded = verifyAccessToken(token);
    } catch {
      throw new ApiError(401, "Invalid or expired token");
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        deletedAt: true,
      },
    });

    if (!user || user.deletedAt) {
      throw new ApiError(401, "User no longer exists");
    }

    if (!user.isActive) {
      throw new ApiError(403, "This account has been deactivated");
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  }
);