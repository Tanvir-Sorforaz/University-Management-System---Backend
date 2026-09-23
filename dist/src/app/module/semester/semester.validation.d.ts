import z from "zod";
export declare const SemesterValidation: {
    UpdateSemesterZodSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        feeAmount: z.ZodOptional<z.ZodNumber>;
        creditHours: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
};
//# sourceMappingURL=semester.validation.d.ts.map