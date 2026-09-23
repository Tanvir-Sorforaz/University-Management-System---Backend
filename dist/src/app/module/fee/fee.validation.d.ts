import z from "zod";
export declare const FeeValidation: {
    CreateFeeZodSchema: z.ZodObject<{
        studentId: z.ZodString;
        semesterId: z.ZodString;
        amount: z.ZodNumber;
        dueDate: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=fee.validation.d.ts.map