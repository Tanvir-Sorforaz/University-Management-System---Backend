import type { ICreateResultPayload, IUpdateResultPayload } from "./result.interface.js";
/**
 * Faculty enters a mark. Upserts on the (examId, studentId) unique
 * constraint, so re-submitting the same exam+student corrects it instead
 * of erroring — recalculates the student's transcript either way.
 */
declare const createResult: (payload: ICreateResultPayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    examId: string;
    studentId: string;
    marksObtained: number;
    grade: import("../../../../generated/prisma/enums.js").Grade | null;
    remarks: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getMyResults: (userId: string) => Promise<({
    exam: {
        id: string;
        semesterId: string;
        title: string;
        type: import("../../../../generated/prisma/enums.js").ExamType;
        examDate: Date;
        totalMarks: number;
        weightPercent: number;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
} & {
    id: string;
    examId: string;
    studentId: string;
    marksObtained: number;
    grade: import("../../../../generated/prisma/enums.js").Grade | null;
    remarks: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>;
/**
 * Corrects an already-entered result. Always audit-logged with a
 * before/after diff, and always recalculates the transcript afterward.
 */
declare const updateResult: (id: string, payload: IUpdateResultPayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    examId: string;
    studentId: string;
    marksObtained: number;
    grade: import("../../../../generated/prisma/enums.js").Grade | null;
    remarks: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const ResultService: {
    createResult: typeof createResult;
    getMyResults: typeof getMyResults;
    updateResult: typeof updateResult;
};
export {};
//# sourceMappingURL=result.service.d.ts.map