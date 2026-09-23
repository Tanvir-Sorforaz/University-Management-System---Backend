import { Role } from "../../../../generated/prisma/enums.js";
import type { ILoginPayload, IRegisterStudentPayload, IverifyEmailPayload } from "./auth.interface.js";
declare const registerStudent: (payload: IRegisterStudentPayload) => Promise<void>;
declare const verifyStudentEmail: (payload: IverifyEmailPayload) => Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: Role;
    };
    accessToken: string;
    refreshToken: string;
}>;
declare const loginUser: (payload: ILoginPayload) => Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: Role;
    };
    accessToken: string;
    refreshToken: string;
}>;
declare const getMe: (requestUser: {
    userId: string;
}) => Promise<{
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
    } | null;
    studentProfile: {
        id: string;
        userId: string;
        studentId: string;
        department: import("../../../../generated/prisma/enums.js").Department;
        currentSemester: number;
        phone: string | null;
        address: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null;
} & {
    id: string;
    name: string;
    emailVerified: boolean;
    email: string;
    role: Role;
    adminType: import("../../../../generated/prisma/enums.js").AdminType | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
declare const refreshToken: (token: string) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare const AuthService: {
    registerStudent: typeof registerStudent;
    verifyStudentEmail: typeof verifyStudentEmail;
    loginUser: typeof loginUser;
    getMe: typeof getMe;
    refreshToken: typeof refreshToken;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map