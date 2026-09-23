import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Attendance
 *
 */
export type Attendance = Prisma.AttendanceModel;
/**
 * Model AuditLog
 *
 */
export type AuditLog = Prisma.AuditLogModel;
/**
 * Model Enrollment
 *
 */
export type Enrollment = Prisma.EnrollmentModel;
/**
 * Model Exam
 *
 */
export type Exam = Prisma.ExamModel;
/**
 * Model ExamResult
 *
 */
export type ExamResult = Prisma.ExamResultModel;
/**
 * Model FacultyProfile
 *
 */
export type FacultyProfile = Prisma.FacultyProfileModel;
/**
 * Model Fee
 *
 */
export type Fee = Prisma.FeeModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model Semester
 *
 */
export type Semester = Prisma.SemesterModel;
/**
 * Model StudentProfile
 *
 */
export type StudentProfile = Prisma.StudentProfileModel;
/**
 * Model Transcript
 *
 */
export type Transcript = Prisma.TranscriptModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
//# sourceMappingURL=client.d.ts.map