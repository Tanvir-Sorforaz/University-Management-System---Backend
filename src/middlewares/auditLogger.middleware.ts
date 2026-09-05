import { NextFunction, Request, Response } from "express";
import  prisma  from "../lib/prisma";
// import { logger } from "../utils/logger";

interface AuditLogInput {
  performedById: string;
  action: string;
  entity: string;
  entityId: string;
  changes?: Record<string, unknown>;
}

/**
 * Directly writes an AuditLog row. Call this from services for actions
 * that need precise before/after values (e.g. result corrections, role
 * changes, payment status changes).
 */
export const recordAuditLog = async (input: AuditLogInput) => {
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
  } catch (error) {
    // Audit logging must never break the main request flow.
    // logger.error({ message: "Failed to write audit log", error });
  }
};

/**
 * Express middleware factory for simple route-level auto-logging, where
 * the entity id comes from req.params.id and the request body is the
 * "changes" payload. For anything needing before/after diffs, prefer
 * calling recordAuditLog() directly inside the service instead.
 * Usage: router.patch("/:id/role", auth, requireRole(Role.ADMIN),
 *                      auditLogger("CHANGE_ROLE", "User"), controller.updateRole)
 */
export const auditLogger = (action: string, entity: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.on("finish", () => {
      if (!req.user) return;
      if (res.statusCode >= 400) return;

      const entityId = req.params.id ?? res.locals.entityId ?? "unknown";

      void recordAuditLog({
        performedById: req.user.id,
        action,
        entity,
        entityId,
        changes: req.body,
      });
    });

    next();
  };
};