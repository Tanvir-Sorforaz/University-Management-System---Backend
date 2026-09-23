import { PaymentMethod, PaymentStatus } from "../../../../generated/prisma/enums.js";
import type { IBkashCallbackQuery, IInitiatePaymentPayload } from "./payment.interface.js";
/**
 * Creates a local PENDING Payment row, then opens a bKash checkout session
 * for it. The student is redirected to the returned bkashURL to actually
 * pay; bKash calls back to GET /payments/callback once they're done.
 */
declare const initiatePayment: (payload: IInitiatePaymentPayload, actor: {
    userId: string;
}) => Promise<{
    paymentId: string;
    bkashURL: string;
}>;
/**
 * Called when bKash redirects the student's browser back after checkout.
 * Always finalizes via executeBkashPayment server-side — the `status`
 * query param alone is never trusted to mean the payment actually succeeded.
 */
declare const handleCallback: (query: IBkashCallbackQuery) => Promise<{
    id: string;
    feeId: string;
    studentId: string;
    amount: number;
    method: PaymentMethod;
    status: PaymentStatus;
    gatewayPaymentId: string | null;
    transactionId: string | null;
    gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getPaymentById: (id: string) => Promise<{
    id: string;
    feeId: string;
    studentId: string;
    amount: number;
    method: PaymentMethod;
    status: PaymentStatus;
    gatewayPaymentId: string | null;
    transactionId: string | null;
    gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const PaymentService: {
    initiatePayment: typeof initiatePayment;
    handleCallback: typeof handleCallback;
    getPaymentById: typeof getPaymentById;
};
export {};
//# sourceMappingURL=payment.service.d.ts.map