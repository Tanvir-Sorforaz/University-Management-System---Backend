import type { ICreateExamPayload, IUpdateExamPayload } from "./exam.interface.js";
declare const createExam: (payload: ICreateExamPayload, actor: {
    userId: string;
}) => Promise<{
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
}>;
declare const getExamById: (id: string) => Promise<{
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
}>;
declare const updateExam: (id: string, payload: IUpdateExamPayload) => Promise<{
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
}>;
declare const deleteExam: (id: string) => Promise<{
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
}>;
export declare const ExamService: {
    createExam: typeof createExam;
    getExamById: typeof getExamById;
    updateExam: typeof updateExam;
    deleteExam: typeof deleteExam;
};
export {};
//# sourceMappingURL=exam.service.d.ts.map