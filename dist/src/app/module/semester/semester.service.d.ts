import type { IQuery } from "../../interfaces/index.js";
import type { IUpdateSemesterPayload } from "./semester.interface.js";
declare const getAllSemesters: (query: IQuery) => Promise<{
    semesters: {
        id: string;
        department: import("../../../../generated/prisma/enums.js").Department;
        semesterNumber: number;
        name: string | null;
        feeAmount: number;
        creditHours: number;
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
declare const getSemesterById: (id: string) => Promise<{
    id: string;
    department: import("../../../../generated/prisma/enums.js").Department;
    semesterNumber: number;
    name: string | null;
    feeAmount: number;
    creditHours: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
declare const updateSemester: (id: string, payload: IUpdateSemesterPayload) => Promise<{
    id: string;
    department: import("../../../../generated/prisma/enums.js").Department;
    semesterNumber: number;
    name: string | null;
    feeAmount: number;
    creditHours: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const SemesterService: {
    getAllSemesters: typeof getAllSemesters;
    getSemesterById: typeof getSemesterById;
    updateSemester: typeof updateSemester;
};
export {};
//# sourceMappingURL=semester.service.d.ts.map