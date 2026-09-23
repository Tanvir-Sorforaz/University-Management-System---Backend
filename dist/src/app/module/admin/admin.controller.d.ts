import type { Request, Response } from "express";
export declare const AdminController: {
    createFaculty: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createAdmin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    assignDepartmentHead: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllUsers: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateUserStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getDashboardStats: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAuditLogs: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map