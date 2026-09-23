import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Attendance: 'Attendance';
    readonly AuditLog: 'AuditLog';
    readonly Enrollment: 'Enrollment';
    readonly Exam: 'Exam';
    readonly ExamResult: 'ExamResult';
    readonly FacultyProfile: 'FacultyProfile';
    readonly Fee: 'Fee';
    readonly Notification: 'Notification';
    readonly Payment: 'Payment';
    readonly Semester: 'Semester';
    readonly StudentProfile: 'StudentProfile';
    readonly Transcript: 'Transcript';
    readonly User: 'User';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AttendanceScalarFieldEnum: {
    readonly id: 'id';
    readonly semesterId: 'semesterId';
    readonly studentId: 'studentId';
    readonly date: 'date';
    readonly status: 'status';
    readonly markedById: 'markedById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: 'id';
    readonly performedById: 'performedById';
    readonly action: 'action';
    readonly entity: 'entity';
    readonly entityId: 'entityId';
    readonly changes: 'changes';
    readonly createdAt: 'createdAt';
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: 'id';
    readonly studentId: 'studentId';
    readonly semesterId: 'semesterId';
    readonly status: 'status';
    readonly enrolledAt: 'enrolledAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const ExamScalarFieldEnum: {
    readonly id: 'id';
    readonly semesterId: 'semesterId';
    readonly title: 'title';
    readonly type: 'type';
    readonly examDate: 'examDate';
    readonly totalMarks: 'totalMarks';
    readonly weightPercent: 'weightPercent';
    readonly createdById: 'createdById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum];
export declare const ExamResultScalarFieldEnum: {
    readonly id: 'id';
    readonly examId: 'examId';
    readonly studentId: 'studentId';
    readonly marksObtained: 'marksObtained';
    readonly grade: 'grade';
    readonly remarks: 'remarks';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ExamResultScalarFieldEnum = (typeof ExamResultScalarFieldEnum)[keyof typeof ExamResultScalarFieldEnum];
export declare const FacultyProfileScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly facultyId: 'facultyId';
    readonly department: 'department';
    readonly isDepartmentHead: 'isDepartmentHead';
    readonly designation: 'designation';
    readonly phone: 'phone';
    readonly avatarUrl: 'avatarUrl';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type FacultyProfileScalarFieldEnum = (typeof FacultyProfileScalarFieldEnum)[keyof typeof FacultyProfileScalarFieldEnum];
export declare const FeeScalarFieldEnum: {
    readonly id: 'id';
    readonly studentId: 'studentId';
    readonly semesterId: 'semesterId';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly dueDate: 'dueDate';
    readonly isPaid: 'isPaid';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type FeeScalarFieldEnum = (typeof FeeScalarFieldEnum)[keyof typeof FeeScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly type: 'type';
    readonly title: 'title';
    readonly message: 'message';
    readonly isRead: 'isRead';
    readonly createdAt: 'createdAt';
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: 'id';
    readonly feeId: 'feeId';
    readonly studentId: 'studentId';
    readonly amount: 'amount';
    readonly method: 'method';
    readonly status: 'status';
    readonly gatewayPaymentId: 'gatewayPaymentId';
    readonly transactionId: 'transactionId';
    readonly gatewayResponse: 'gatewayResponse';
    readonly paidAt: 'paidAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const SemesterScalarFieldEnum: {
    readonly id: 'id';
    readonly department: 'department';
    readonly semesterNumber: 'semesterNumber';
    readonly name: 'name';
    readonly feeAmount: 'feeAmount';
    readonly creditHours: 'creditHours';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum];
export declare const StudentProfileScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly studentId: 'studentId';
    readonly department: 'department';
    readonly currentSemester: 'currentSemester';
    readonly phone: 'phone';
    readonly address: 'address';
    readonly dateOfBirth: 'dateOfBirth';
    readonly avatarUrl: 'avatarUrl';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum];
export declare const TranscriptScalarFieldEnum: {
    readonly id: 'id';
    readonly studentId: 'studentId';
    readonly cgpa: 'cgpa';
    readonly totalCreditsEarned: 'totalCreditsEarned';
    readonly updatedAt: 'updatedAt';
    readonly createdAt: 'createdAt';
};
export type TranscriptScalarFieldEnum = (typeof TranscriptScalarFieldEnum)[keyof typeof TranscriptScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly emailVerified: 'emailVerified';
    readonly email: 'email';
    readonly password: 'password';
    readonly role: 'role';
    readonly adminType: 'adminType';
    readonly isActive: 'isActive';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map