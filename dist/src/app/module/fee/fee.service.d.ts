import type { IQuery } from "../../interfaces/index.js";
import type { ICreateFeePayload } from "./fee.interface.js";
/**
 * Admin generates an invoice for a student to enter a specific Semester.
 * amount is copied from Semester.feeAmount at creation time, so a later
 * price change never rewrites history for already-billed students.
 */
declare const createFee: (payload: ICreateFeePayload) => Promise<{
    id: string;
    studentId: string;
    semesterId: string;
    amount: number;
    currency: string;
    dueDate: Date;
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
declare const getMyFees: (userId: string, query: IQuery) => Promise<{
    fees: ({
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
        studentId: string;
        semesterId: string;
        amount: number;
        currency: string;
        dueDate: Date;
        isPaid: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare const FeeService: {
    createFee: typeof createFee;
    getMyFees: typeof getMyFees;
};
export {};
//# sourceMappingURL=fee.service.d.ts.map