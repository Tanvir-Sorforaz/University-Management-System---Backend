import { Grade } from "../../generated/prisma/enums";

/** Grade point scale (4.0 scale). Adjust to match your institution's policy. */
export const GRADE_POINTS: Record<Grade, number> = {
  A_PLUS: 4.0,
  A: 3.75,
  A_MINUS: 3.5,
  B_PLUS: 3.25,
  B: 3.0,
  B_MINUS: 2.75,
  C_PLUS: 2.5,
  C: 2.25,
  D: 2.0,
  F: 0.0,
};

/** Marks-percentage cutoffs, evaluated top-down. */
const GRADE_CUTOFFS: { min: number; grade: Grade }[] = [
  { min: 80, grade: Grade.A_PLUS },
  { min: 75, grade: Grade.A },
  { min: 70, grade: Grade.A_MINUS },
  { min: 65, grade: Grade.B_PLUS },
  { min: 60, grade: Grade.B },
  { min: 55, grade: Grade.B_MINUS },
  { min: 50, grade: Grade.C_PLUS },
  { min: 45, grade: Grade.C },
  { min: 40, grade: Grade.D },
  { min: 0, grade: Grade.F },
];

/** Converts a percentage score (0-100) into a letter grade. */
export const marksToGrade = (percentage: number): Grade => {
  const match = GRADE_CUTOFFS.find((c) => percentage >= c.min);
  return match ? match.grade : Grade.F;
};

interface ExamComponent {
  marksObtained: number;
  totalMarks: number;
  weightPercent: number;
}

/**
 * Combines all exam components of one course (quiz/midterm/final, each with
 * its own weight) into a single 0-100 course percentage, then maps it to a
 * letter grade for that course.
 */
export const calculateCourseGrade = (components: ExamComponent[]): {
  percentage: number;
  grade: Grade;
} => {
  const totalWeight = components.reduce((sum, c) => sum + c.weightPercent, 0);

  if (totalWeight === 0) {
    return { percentage: 0, grade: Grade.F };
  }

  const weightedScore = components.reduce((sum, c) => {
    const componentPercentage = (c.marksObtained / c.totalMarks) * 100;
    return sum + componentPercentage * (c.weightPercent / totalWeight);
  }, 0);

  const percentage = Math.round(weightedScore * 100) / 100;
  return { percentage, grade: marksToGrade(percentage) };
};

interface CompletedCourse {
  grade: Grade;
  creditHours: number;
}

/**
 * Calculates CGPA (credit-hour weighted) across all completed courses.
 * Used by transcript.service.ts whenever a new result is finalized.
 */
export const calculateCgpa = (
  completedCourses: CompletedCourse[]
): { cgpa: number; totalCreditsEarned: number } => {
  if (completedCourses.length === 0) {
    return { cgpa: 0, totalCreditsEarned: 0 };
  }

  const totalCredits = completedCourses.reduce(
    (sum, c) => sum + c.creditHours,
    0
  );

  const totalQualityPoints = completedCourses.reduce(
    (sum, c) => sum + GRADE_POINTS[c.grade] * c.creditHours,
    0
  );

  // Credits from failed courses (F) still count toward attempted credits,
  // but not toward "earned" credits.
  const creditsEarned = completedCourses
    .filter((c) => c.grade !== Grade.F)
    .reduce((sum, c) => sum + c.creditHours, 0);

  return {
    cgpa: totalCredits === 0 ? 0 : Math.round((totalQualityPoints / totalCredits) * 100) / 100,
    totalCreditsEarned: creditsEarned,
  };
};