import httpStatus from "http-status";
import config from "../config/index.js";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { jwtUtils } from "../utils/jwt.js";
// auth(Role.ADMIN, Role.FACULTY)
// no args => any authenticated user is allowed through
export const auth = (...requiredRoles) => {
    return catchAsync(async (req, res, next) => {
        const token = req.cookies?.accessToken
            ? req.cookies.accessToken
            : req.headers.authorization?.startsWith("Bearer ")
                ? req.headers.authorization.split(" ")[1]
                : req.headers.authorization;
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You are not logged in. Please log in to access this resource.");
        }
        const verifiedToken = jwtUtils.verifyToken(token, config.jwt_access_secret);
        if (!verifiedToken.success) {
            throw new AppError(httpStatus.UNAUTHORIZED, verifiedToken.error);
        }
        const { userId, role } = verifiedToken.data;
        if (requiredRoles.length && !requiredRoles.includes(role)) {
            throw new AppError(httpStatus.FORBIDDEN, "Forbidden. You don't have permission to access this resource.");
        }
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user || user.deletedAt) {
            throw new AppError(httpStatus.UNAUTHORIZED, "User not found. Please log in again.");
        }
        if (!user.isActive) {
            throw new AppError(httpStatus.FORBIDDEN, "Your account has been deactivated. Please contact support.");
        }
        req.user = {
            userId: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        };
        next();
    });
};
//# sourceMappingURL=checkAuth.js.map