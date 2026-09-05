import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { Role } from "../../generated/prisma/enums";

/**
 * Restricts a route to one or more of the 3 fixed roles.
 * Usage: router.post("/", auth, requireRole(Role.ADMIN), controller.create)
 */
export const requireRole = (...allowedRoles: Role[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new ApiError(401, "Authentication required");
    }

    if (!allowedRoles.includes(req.user.role)) {
      throw new ApiError(
        403,
        "You do not have permission to perform this action"
      );
    }

    next();
  };
};