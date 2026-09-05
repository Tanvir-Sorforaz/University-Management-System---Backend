import { Router } from "express";
import { auth } from "../../middlewares/auth.middleware";
import { validateRequest } from "../../middlewares/validate.middleware";
import { authRateLimiter } from "../../middlewares/rateLimiter.middleware";
import { AuthController } from "./auth.controller";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "./auth.validation";

const router = Router();

// Public self-registration always creates a STUDENT account.
// FACULTY / ADMIN accounts are created by an ADMIN via the admin module.
router.post(
  "/register",
  authRateLimiter,
  validateRequest(registerValidationSchema),
  AuthController.register
);

router.post(
  "/login",
  authRateLimiter,
  validateRequest(loginValidationSchema),
  AuthController.login
);

// Refresh token is read from the httpOnly cookie set at login/register,
// so no body validation is enforced here.
router.post("/refresh-token", AuthController.refreshToken);

router.post("/logout", auth, AuthController.logout);

export const AuthRoutes = router;
