export declare const Role: {
    readonly STUDENT: 'STUDENT';
    readonly FACULTY: 'FACULTY';
    readonly ADMIN: 'ADMIN';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const AdminType: {
    readonly VC: 'VC';
    readonly REGISTRAR: 'REGISTRAR';
    readonly FINANCE: 'FINANCE';
    readonly SUPER: 'SUPER';
};
export type AdminType = (typeof AdminType)[keyof typeof AdminType];
export declare const Department: {
    readonly CSE: 'CSE';
    readonly EEE: 'EEE';
    readonly CIVIL: 'CIVIL';
};
export type Department = (typeof Department)[keyof typeof Department];
export declare const EnrollmentStatus: {
    readonly ENROLLED: 'ENROLLED';
    readonly COMPLETED: 'COMPLETED';
};
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];
export declare const AttendanceStatus: {
    readonly PRESENT: 'PRESENT';
    readonly ABSENT: 'ABSENT';
    readonly LATE: 'LATE';
    readonly EXCUSED: 'EXCUSED';
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const ExamType: {
    readonly QUIZ: 'QUIZ';
    readonly ASSIGNMENT: 'ASSIGNMENT';
    readonly MIDTERM: 'MIDTERM';
    readonly FINAL: 'FINAL';
};
export type ExamType = (typeof ExamType)[keyof typeof ExamType];
export declare const Grade: {
    readonly A_PLUS: 'A_PLUS';
    readonly A: 'A';
    readonly A_MINUS: 'A_MINUS';
    readonly B_PLUS: 'B_PLUS';
    readonly B: 'B';
    readonly B_MINUS: 'B_MINUS';
    readonly C_PLUS: 'C_PLUS';
    readonly C: 'C';
    readonly D: 'D';
    readonly F: 'F';
};
export type Grade = (typeof Grade)[keyof typeof Grade];
export declare const PaymentMethod: {
    readonly BKASH: 'BKASH';
    readonly STRIPE: 'STRIPE';
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentStatus: {
    readonly PENDING: 'PENDING';
    readonly SUCCESS: 'SUCCESS';
    readonly FAILED: 'FAILED';
    readonly CANCELLED: 'CANCELLED';
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const NotificationType: {
    readonly ENROLLMENT: 'ENROLLMENT';
    readonly ATTENDANCE: 'ATTENDANCE';
    readonly RESULT: 'RESULT';
    readonly PAYMENT: 'PAYMENT';
    readonly ANNOUNCEMENT: 'ANNOUNCEMENT';
    readonly GENERAL: 'GENERAL';
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map