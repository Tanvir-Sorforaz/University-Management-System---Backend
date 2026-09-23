import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.10.0
 * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | ({
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O) : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "attendance" | "auditLog" | "enrollment" | "exam" | "examResult" | "facultyProfile" | "fee" | "notification" | "payment" | "semester" | "studentProfile" | "transcript" | "user";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Attendance: {
            payload: Prisma.$AttendancePayload<ExtArgs>;
            fields: Prisma.AttendanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findMany: {
                    args: Prisma.AttendanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                create: {
                    args: Prisma.AttendanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                createMany: {
                    args: Prisma.AttendanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                delete: {
                    args: Prisma.AttendanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                update: {
                    args: Prisma.AttendanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendance>;
                };
                groupBy: {
                    args: Prisma.AttendanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Enrollment: {
            payload: Prisma.$EnrollmentPayload<ExtArgs>;
            fields: Prisma.EnrollmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                findFirst: {
                    args: Prisma.EnrollmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                findMany: {
                    args: Prisma.EnrollmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                create: {
                    args: Prisma.EnrollmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                createMany: {
                    args: Prisma.EnrollmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                delete: {
                    args: Prisma.EnrollmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                update: {
                    args: Prisma.EnrollmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                deleteMany: {
                    args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                upsert: {
                    args: Prisma.EnrollmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                aggregate: {
                    args: Prisma.EnrollmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEnrollment>;
                };
                groupBy: {
                    args: Prisma.EnrollmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EnrollmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentCountAggregateOutputType> | number;
                };
            };
        };
        Exam: {
            payload: Prisma.$ExamPayload<ExtArgs>;
            fields: Prisma.ExamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                findFirst: {
                    args: Prisma.ExamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                findMany: {
                    args: Prisma.ExamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                create: {
                    args: Prisma.ExamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                createMany: {
                    args: Prisma.ExamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                delete: {
                    args: Prisma.ExamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                update: {
                    args: Prisma.ExamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                upsert: {
                    args: Prisma.ExamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                aggregate: {
                    args: Prisma.ExamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExam>;
                };
                groupBy: {
                    args: Prisma.ExamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamCountAggregateOutputType> | number;
                };
            };
        };
        ExamResult: {
            payload: Prisma.$ExamResultPayload<ExtArgs>;
            fields: Prisma.ExamResultFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamResultFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamResultFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>;
                };
                findFirst: {
                    args: Prisma.ExamResultFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamResultFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>;
                };
                findMany: {
                    args: Prisma.ExamResultFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>[];
                };
                create: {
                    args: Prisma.ExamResultCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>;
                };
                createMany: {
                    args: Prisma.ExamResultCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamResultCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>[];
                };
                delete: {
                    args: Prisma.ExamResultDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>;
                };
                update: {
                    args: Prisma.ExamResultUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamResultDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamResultUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamResultUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>[];
                };
                upsert: {
                    args: Prisma.ExamResultUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamResultPayload>;
                };
                aggregate: {
                    args: Prisma.ExamResultAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamResult>;
                };
                groupBy: {
                    args: Prisma.ExamResultGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamResultGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamResultCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamResultCountAggregateOutputType> | number;
                };
            };
        };
        FacultyProfile: {
            payload: Prisma.$FacultyProfilePayload<ExtArgs>;
            fields: Prisma.FacultyProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FacultyProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FacultyProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>;
                };
                findFirst: {
                    args: Prisma.FacultyProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FacultyProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>;
                };
                findMany: {
                    args: Prisma.FacultyProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[];
                };
                create: {
                    args: Prisma.FacultyProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>;
                };
                createMany: {
                    args: Prisma.FacultyProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FacultyProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[];
                };
                delete: {
                    args: Prisma.FacultyProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>;
                };
                update: {
                    args: Prisma.FacultyProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.FacultyProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FacultyProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FacultyProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[];
                };
                upsert: {
                    args: Prisma.FacultyProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacultyProfilePayload>;
                };
                aggregate: {
                    args: Prisma.FacultyProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacultyProfile>;
                };
                groupBy: {
                    args: Prisma.FacultyProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacultyProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FacultyProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacultyProfileCountAggregateOutputType> | number;
                };
            };
        };
        Fee: {
            payload: Prisma.$FeePayload<ExtArgs>;
            fields: Prisma.FeeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                findFirst: {
                    args: Prisma.FeeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                findMany: {
                    args: Prisma.FeeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>[];
                };
                create: {
                    args: Prisma.FeeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                createMany: {
                    args: Prisma.FeeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>[];
                };
                delete: {
                    args: Prisma.FeeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                update: {
                    args: Prisma.FeeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                deleteMany: {
                    args: Prisma.FeeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>[];
                };
                upsert: {
                    args: Prisma.FeeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                aggregate: {
                    args: Prisma.FeeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFee>;
                };
                groupBy: {
                    args: Prisma.FeeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        Semester: {
            payload: Prisma.$SemesterPayload<ExtArgs>;
            fields: Prisma.SemesterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SemesterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SemesterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>;
                };
                findFirst: {
                    args: Prisma.SemesterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SemesterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>;
                };
                findMany: {
                    args: Prisma.SemesterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>[];
                };
                create: {
                    args: Prisma.SemesterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>;
                };
                createMany: {
                    args: Prisma.SemesterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SemesterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>[];
                };
                delete: {
                    args: Prisma.SemesterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>;
                };
                update: {
                    args: Prisma.SemesterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>;
                };
                deleteMany: {
                    args: Prisma.SemesterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SemesterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SemesterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>[];
                };
                upsert: {
                    args: Prisma.SemesterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SemesterPayload>;
                };
                aggregate: {
                    args: Prisma.SemesterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSemester>;
                };
                groupBy: {
                    args: Prisma.SemesterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SemesterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SemesterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SemesterCountAggregateOutputType> | number;
                };
            };
        };
        StudentProfile: {
            payload: Prisma.$StudentProfilePayload<ExtArgs>;
            fields: Prisma.StudentProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findFirst: {
                    args: Prisma.StudentProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findMany: {
                    args: Prisma.StudentProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                create: {
                    args: Prisma.StudentProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                createMany: {
                    args: Prisma.StudentProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                delete: {
                    args: Prisma.StudentProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                update: {
                    args: Prisma.StudentProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                upsert: {
                    args: Prisma.StudentProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                aggregate: {
                    args: Prisma.StudentProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentProfile>;
                };
                groupBy: {
                    args: Prisma.StudentProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileCountAggregateOutputType> | number;
                };
            };
        };
        Transcript: {
            payload: Prisma.$TranscriptPayload<ExtArgs>;
            fields: Prisma.TranscriptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TranscriptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TranscriptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                findFirst: {
                    args: Prisma.TranscriptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TranscriptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                findMany: {
                    args: Prisma.TranscriptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>[];
                };
                create: {
                    args: Prisma.TranscriptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                createMany: {
                    args: Prisma.TranscriptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TranscriptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>[];
                };
                delete: {
                    args: Prisma.TranscriptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                update: {
                    args: Prisma.TranscriptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                deleteMany: {
                    args: Prisma.TranscriptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TranscriptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TranscriptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>[];
                };
                upsert: {
                    args: Prisma.TranscriptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                aggregate: {
                    args: Prisma.TranscriptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTranscript>;
                };
                groupBy: {
                    args: Prisma.TranscriptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscriptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TranscriptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscriptCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'AttendanceStatus'
 */
export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>;
/**
 * Reference to a field of type 'AttendanceStatus[]'
 */
export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'EnrollmentStatus'
 */
export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>;
/**
 * Reference to a field of type 'EnrollmentStatus[]'
 */
export type ListEnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus[]'>;
/**
 * Reference to a field of type 'ExamType'
 */
export type EnumExamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamType'>;
/**
 * Reference to a field of type 'ExamType[]'
 */
export type ListEnumExamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamType[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Grade'
 */
export type EnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade'>;
/**
 * Reference to a field of type 'Grade[]'
 */
export type ListEnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade[]'>;
/**
 * Reference to a field of type 'Department'
 */
export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>;
/**
 * Reference to a field of type 'Department[]'
 */
export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'NotificationType'
 */
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
/**
 * Reference to a field of type 'NotificationType[]'
 */
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
/**
 * Reference to a field of type 'PaymentMethod'
 */
export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>;
/**
 * Reference to a field of type 'PaymentMethod[]'
 */
export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>;
/**
 * Reference to a field of type 'PaymentStatus'
 */
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
/**
 * Reference to a field of type 'PaymentStatus[]'
 */
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'AdminType'
 */
export type EnumAdminTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminType'>;
/**
 * Reference to a field of type 'AdminType[]'
 */
export type ListEnumAdminTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminType[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    attendance?: Prisma.AttendanceOmit;
    auditLog?: Prisma.AuditLogOmit;
    enrollment?: Prisma.EnrollmentOmit;
    exam?: Prisma.ExamOmit;
    examResult?: Prisma.ExamResultOmit;
    facultyProfile?: Prisma.FacultyProfileOmit;
    fee?: Prisma.FeeOmit;
    notification?: Prisma.NotificationOmit;
    payment?: Prisma.PaymentOmit;
    semester?: Prisma.SemesterOmit;
    studentProfile?: Prisma.StudentProfileOmit;
    transcript?: Prisma.TranscriptOmit;
    user?: Prisma.UserOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map