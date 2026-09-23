import z from "zod";
export declare const AttendanceValidation: {
    MarkAttendanceZodSchema: z.ZodObject<{
        semesterId: z.ZodString;
        studentId: z.ZodString;
        date: z.ZodString;
        status: z.ZodEnum<{
            readonly PRESENT: 'PRESENT';
            readonly ABSENT: 'ABSENT';
            readonly LATE: 'LATE';
            readonly EXCUSED: 'EXCUSED';
        }>;
    }, z.core.$strip>;
};
//# sourceMappingURL=attendance.validation.d.ts.map