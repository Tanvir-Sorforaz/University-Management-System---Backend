import z from "zod";
export declare const ResultValidation: {
    CreateResultZodSchema: z.ZodObject<{
        examId: z.ZodString;
        studentId: z.ZodString;
        marksObtained: z.ZodNumber;
        remarks: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    UpdateResultZodSchema: z.ZodObject<{
        marksObtained: z.ZodOptional<z.ZodNumber>;
        remarks: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=result.validation.d.ts.map