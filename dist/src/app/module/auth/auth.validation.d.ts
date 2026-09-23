import z from "zod";
export declare const AuthValidation: {
    RegisterStudentZodSchema: z.ZodObject<{
        email: z.ZodEmail;
        name: z.ZodString;
        password: z.ZodString;
        departmentName: z.ZodEnum<{
            readonly CSE: 'CSE';
            readonly EEE: 'EEE';
            readonly CIVIL: 'CIVIL';
        }>;
        studentId: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        dateOfBirth: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    VerifyEmailZodSchema: z.ZodObject<{
        email: z.ZodEmail;
        otp: z.ZodString;
    }, z.core.$strip>;
    LoginZodSchema: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map