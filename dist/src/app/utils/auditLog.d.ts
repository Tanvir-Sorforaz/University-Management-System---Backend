import type { Prisma } from "../../../generated/prisma/client.js";
interface IAuditLogInput {
    performedById: string;
    action: string;
    entity: string;
    entityId: string;
    changes?: Prisma.InputJsonValue;
}
/**
 * Writes an AuditLog row. Never throws — a failed audit write should
 * never break the actual request that triggered it.
 */
export declare const recordAuditLog: (input: IAuditLogInput) => Promise<void>;
export {};
//# sourceMappingURL=auditLog.d.ts.map