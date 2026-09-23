import z from "zod";
export declare const AdminValidation: {
    CreateFacultyZodSchema: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        department: z.ZodEnum<{
            readonly CSE: 'CSE';
            readonly EEE: 'EEE';
            readonly CIVIL: 'CIVIL';
        }>;
        facultyId: z.ZodOptional<z.ZodString>;
        designation: z.ZodOptional<z.ZodString>;
        isDepartmentHead: z.ZodOptional<z.ZodBoolean>;
        phone: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    CreateAdminZodSchema: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        adminType: z.ZodEnum<{
            readonly VC: 'VC';
            readonly REGISTRAR: 'REGISTRAR';
            readonly FINANCE: 'FINANCE';
            readonly SUPER: 'SUPER';
        }>;
    }, z.core.$strip>;
    UpdateUserStatusZodSchema: z.ZodObject<{
        isActive: z.ZodBoolean;
    }, z.core.$strip>;
};
//# sourceMappingURL=admin.validation.d.ts.map