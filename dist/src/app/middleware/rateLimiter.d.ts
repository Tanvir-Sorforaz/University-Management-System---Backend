/** General-purpose limiter applied globally in app.ts */
export declare const generalRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
/** Stricter limiter for auth routes (register/verify-email/login) to slow brute-force attempts */
export declare const authRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
/** Limiter for payment initiation to prevent abuse of the payment gateway */
export declare const paymentRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
//# sourceMappingURL=rateLimiter.d.ts.map