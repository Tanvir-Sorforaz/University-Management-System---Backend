import type { IQuery } from "../../interfaces/index.js";
import type { ICreateNotificationInput } from "./notification.interface.js";
/**
 * Called from other services (payment, result, enrollment) right after a
 * sensitive event succeeds. Never throws — a failed notification write
 * should never break the action that triggered it.
 */
export declare const createNotification: (input: ICreateNotificationInput) => Promise<void>;
declare const getMyNotifications: (userId: string, query: IQuery) => Promise<{
    notifications: {
        id: string;
        userId: string;
        type: import("../../../../generated/prisma/enums.js").NotificationType;
        title: string;
        message: string;
        isRead: boolean;
        createdAt: Date;
    }[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
declare const markAsRead: (notificationId: string, userId: string) => Promise<{
    id: string;
    userId: string;
    type: import("../../../../generated/prisma/enums.js").NotificationType;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
}>;
export declare const NotificationService: {
    getMyNotifications: typeof getMyNotifications;
    markAsRead: typeof markAsRead;
};
export {};
//# sourceMappingURL=notification.service.d.ts.map