import type { IMarkAttendancePayload } from "./attendance.interface.js";
/**
 * Marks (or corrects, same day) one student's attendance. Uses upsert on
 * the (semesterId, studentId, date) unique constraint so re-submitting the
 * same day just updates the status instead of erroring.
 */
declare const markAttendance: (payload: IMarkAttendancePayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    semesterId: string;
    studentId: string;
    date: Date;
    status: import("../../../../generated/prisma/enums.js").AttendanceStatus;
    markedById: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getMyAttendance: (userId: string) => Promise<({
    semester: {
        id: string;
        department: import("../../../../generated/prisma/enums.js").Department;
        semesterNumber: number;
        name: string | null;
        feeAmount: number;
        creditHours: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
} & {
    id: string;
    semesterId: string;
    studentId: string;
    date: Date;
    status: import("../../../../generated/prisma/enums.js").AttendanceStatus;
    markedById: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>;
declare const getAttendanceById: (id: string) => Promise<{
    markedBy: {
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
    semester: {
        id: string;
        department: import("../../../../generated/prisma/enums.js").Department;
        semesterNumber: number;
        name: string | null;
        feeAmount: number;
        creditHours: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
    student: {
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
    };
} & {
    id: string;
    semesterId: string;
    studentId: string;
    date: Date;
    status: import("../../../../generated/prisma/enums.js").AttendanceStatus;
    markedById: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const AttendanceService: {
    markAttendance: typeof markAttendance;
    getMyAttendance: typeof getMyAttendance;
    getAttendanceById: typeof getAttendanceById;
};
export {};
//# sourceMappingURL=attendance.service.d.ts.map