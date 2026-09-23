import { EnrollmentStatus } from "../../../../generated/prisma/enums.js";
import type { ICreateEnrollmentPayload } from "./enrollment.interface.js";
/**
 * Business rule that can't be a DB constraint: a student may only enroll
 * in a Semester once they have a paid Fee for it.
 */
declare const createEnrollment: (payload: ICreateEnrollmentPayload, actor: {
    userId: string;
}) => Promise<{
    id: string;
    studentId: string;
    semesterId: string;
    status: EnrollmentStatus;
    enrolledAt: Date;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getMyEnrollments: (userId: string) => Promise<({
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
    status: EnrollmentStatus;
    enrolledAt: Date;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare const EnrollmentService: {
    createEnrollment: typeof createEnrollment;
    getMyEnrollments: typeof getMyEnrollments;
};
export {};
//# sourceMappingURL=enrollment.service.d.ts.map