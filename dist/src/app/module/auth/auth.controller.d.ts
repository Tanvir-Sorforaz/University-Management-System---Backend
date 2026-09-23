import type { Request, Response } from "express";
export declare const AuthController: {
    registerStudent: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    verifyEmail: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    loginUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMe: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    refreshToken: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    logout: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map