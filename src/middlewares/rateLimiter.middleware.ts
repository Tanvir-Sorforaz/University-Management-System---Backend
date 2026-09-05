import rateLimit from "express-rate-limit";
import config from "../config";


const rateLimitedResponse = (message: string) => ({
  success: false,
  message,
  errors: [],
});

/** General-purpose limiter applied globally in app.ts */
export const generalRateLimiter = rateLimit({
  windowMs: config.rate_limit_window_ms,
  max: config.rate_limit_max,
  standardHeaders: true,
  legacyHeaders: false,
  message: rateLimitedResponse("Too many requests, please try again later"),
});

/** Stricter limiter for auth routes (register/login) to slow brute-force attempts */
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: rateLimitedResponse(
    "Too many login/registration attempts, please try again later"
  ),
});

/** Limiter for payment initiation to prevent abuse of the payment gateway */
export const paymentRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: rateLimitedResponse(
    "Too many payment requests, please slow down"
  ),
});