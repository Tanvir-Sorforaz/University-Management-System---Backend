import { AdminType, Role } from "../../../../generated/prisma/enums.js";
import type { IQuery } from "../../interfaces/index.js";
import type { ICreateAdminPayload, ICreateFacultyPayload, IUpdateUserStatusPayload } from "./admin.interface.js";
declare const createFaculty: (payload: ICreateFacultyPayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    name: string;
    email: string;
    role: Role;
    facultyProfile: {
        id: string;
        userId: string;
        facultyId: string;
        department: import("../../../../generated/prisma/enums.js").Department;
        isDepartmentHead: boolean;
        designation: string | null;
        phone: string | null;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
}>;
declare const createAdmin: (payload: ICreateAdminPayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    name: string;
    email: string;
    role: Role;
    adminType: AdminType | null;
}>;
declare const assignDepartmentHead: (facultyProfileId: string, actor: {
    userId: string;
}) => Promise<{
    id: string;
    userId: string;
    facultyId: string;
    department: import("../../../../generated/prisma/enums.js").Department;
    isDepartmentHead: boolean;
    designation: string | null;
    phone: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
} | null>;
declare const getAllUsers: (query: IQuery) => Promise<{
    users: {
        id: string;
        name: string;
        emailVerified: boolean;
        email: string;
        role: Role;
        adminType: AdminType | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
declare const updateUserStatus: (userId: string, payload: IUpdateUserStatusPayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    name: string;
    emailVerified: boolean;
    email: string;
    role: Role;
    adminType: AdminType | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
declare const getDashboardStats: () => Promise<{
    totalStudents: number;
    totalFaculty: number;
    totalAdmins: number;
    totalPaidFees: number;
    totalPendingFees: number;
    totalRevenue: number;
}>;
declare const getAuditLogs: (query: IQuery) => Promise<{
    logs: {
        id: string;
        performedById: string | null;
        action: string;
        entity: string;
        entityId: string;
        changes: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
    }[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare const AdminService: {
    createFaculty: typeof createFaculty;
    createAdmin: typeof createAdmin;
    assignDepartmentHead: typeof assignDepartmentHead;
    getAllUsers: typeof getAllUsers;
    updateUserStatus: typeof updateUserStatus;
    getDashboardStats: typeof getDashboardStats;
    getAuditLogs: typeof getAuditLogs;
};
export {};
//# sourceMappingURL=admin.service.d.ts.map