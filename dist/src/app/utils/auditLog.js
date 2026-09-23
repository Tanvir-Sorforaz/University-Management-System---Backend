import { prisma } from "../lib/prisma.js";
/**
 * Writes an AuditLog row. Never throws — a failed audit write should
 * never break the actual request that triggered it.
 */
export const recordAuditLog = async (input) => {
    try {
        await prisma.auditLog.create({
            data: {
                performedById: input.performedById,
                action: input.action,
                entity: input.entity,
                entityId: input.entityId,
                changes: input.changes,
            },
        });
    }
    catch (error) {
        console.error("Failed to write audit log:", error);
    }
};
//# sourceMappingURL=auditLog.js.map