import type { NextFunction, Request, Response } from "express";
import type { Role } from "../../../generated/prisma/enums.js";
export interface RequestUser {
    userId: string;
    email: string;
    name: string;
    role: Role;
}
declare global {
    namespace Express {
        interface Request {
            user?: RequestUser;
        }
    }
}
export declare const auth: (...requiredRoles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=checkAuth.d.ts.map