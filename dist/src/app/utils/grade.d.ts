import { Grade } from "../../../generated/prisma/enums.js";
/** Grade point scale (4.0 scale). Adjust to match your institution's policy. */
export declare const GRADE_POINTS: Record<Grade, number>;
/** Converts a percentage score (0-100) into a letter grade. */
export declare const marksToGrade: (percentage: number) => Grade;
interface ExamComponent {
    marksObtained: number;
    totalMarks: number;
    weightPercent: number;
}
/**
 * Combines every graded Exam a student has in one Semester (quiz/midterm/final,
 * each with its own weightPercent) into a single 0-100 semester percentage,
 * then maps it to a letter grade for that semester.
 */
export declare const calculateSemesterGrade: (components: ExamComponent[]) => {
    percentage: number;
    grade: Grade;
};
interface CompletedSemester {
    grade: Grade;
    creditHours: number;
}
/**
 * Calculates CGPA (credit-hour weighted) across every semester a student has
 * exam results in. Used by transcript.service.ts whenever a result changes.
 */
export declare const calculateCgpa: (semesters: CompletedSemester[]) => {
    cgpa: number;
    totalCreditsEarned: number;
};
export {};
//# sourceMappingURL=grade.d.ts.map