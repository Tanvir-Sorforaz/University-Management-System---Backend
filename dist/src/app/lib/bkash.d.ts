/**
 * Returns a valid bKash id token, reusing the cached one from Redis
 * whenever possible instead of hitting bKash's auth API on every request:
 *  - id token still has > 10 min left        -> reuse it as-is
 *  - id token is expired/near-expiry, but a
 *    refresh token with > 10 min left exists -> refresh (cheaper than a
 *                                                fresh grant)
 *  - neither is usable                       -> grant a brand new pair
 */
export declare const getBkashIdToken: () => Promise<string>;
interface CreateBkashPaymentInput {
    amount: number;
    payerReference: string;
    merchantInvoiceNumber: string;
    callbackURL: string;
}
/**
 * Creates a bKash checkout session. Returns bKash's own paymentID (needed
 * later to execute the payment) and the bkashURL the student should be
 * redirected to.
 */
export declare const createBkashPayment: (input: CreateBkashPaymentInput) => Promise<{
    [key: string]: unknown;
    paymentID: string;
    bkashURL: string;
    merchantInvoiceNumber: string;
}>;
/**
 * Finalizes a payment after the student completes it on bKash's hosted
 * page. Always call this from the callback handler — never trust the
 * `status` query param alone, since it's just a browser redirect.
 */
export declare const executeBkashPayment: (paymentID: string) => Promise<{
    [key: string]: unknown;
    trxID?: string;
    transactionStatus?: string;
    amount?: string;
    paymentExecuteTime?: string;
    merchantInvoiceNumber?: string;
    statusMessage?: string;
}>;
interface RefundBkashPaymentInput {
    paymentID: string;
    trxID: string;
    amount: number;
    sku: string;
    reason: string;
}
/** Not wired to a route yet — available for a future fee-refund/cancellation flow. */
export declare const refundBkashPayment: (input: RefundBkashPaymentInput) => Promise<any>;
export {};
//# sourceMappingURL=bkash.d.ts.map