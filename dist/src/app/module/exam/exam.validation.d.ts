import z from "zod";
export declare const ExamValidation: {
    CreateExamZodSchema: z.ZodObject<{
        semesterId: z.ZodString;
        title: z.ZodString;
        type: z.ZodEnum<{
            readonly QUIZ: 'QUIZ';
            readonly ASSIGNMENT: 'ASSIGNMENT';
            readonly MIDTERM: 'MIDTERM';
            readonly FINAL: 'FINAL';
        }>;
        examDate: z.ZodString;
        totalMarks: z.ZodNumber;
        weightPercent: z.ZodNumber;
    }, z.core.$strip>;
    UpdateExamZodSchema: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<{
            readonly QUIZ: 'QUIZ';
            readonly ASSIGNMENT: 'ASSIGNMENT';
            readonly MIDTERM: 'MIDTERM';
            readonly FINAL: 'FINAL';
        }>>;
        examDate: z.ZodOptional<z.ZodString>;
        totalMarks: z.ZodOptional<z.ZodNumber>;
        weightPercent: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
};
//# sourceMappingURL=exam.validation.d.ts.map