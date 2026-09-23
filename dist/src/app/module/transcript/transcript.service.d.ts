/**
 * Recalculates a student's CGPA from every Semester they have at least one
 * ExamResult in, weighted by each Semester's creditHours. Called from
 * result.service.ts right after a result is created or corrected.
 *
 * Simplification: this does not require the Semester's Enrollment to be
 * marked COMPLETED first — it just looks at wherever results already exist.
 */
declare const recalculateTranscript: (studentId: string) => Promise<{
    id: string;
    studentId: string;
    cgpa: number;
    totalCreditsEarned: number;
    updatedAt: Date;
    createdAt: Date;
}>;
declare const getMyTranscript: (userId: string) => Promise<{
    id: string;
    studentId: string;
    cgpa: number;
    totalCreditsEarned: number;
    updatedAt: Date;
    createdAt: Date;
}>;
declare const getTranscriptByStudentId: (studentId: string) => Promise<{
    id: string;
    studentId: string;
    cgpa: number;
    totalCreditsEarned: number;
    updatedAt: Date;
    createdAt: Date;
}>;
export declare const TranscriptService: {
    recalculateTranscript: typeof recalculateTranscript;
    getMyTranscript: typeof getMyTranscript;
    getTranscriptByStudentId: typeof getTranscriptByStudentId;
};
export {};
//# sourceMappingURL=transcript.service.d.ts.map