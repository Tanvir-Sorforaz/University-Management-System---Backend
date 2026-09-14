import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";

const router = Router();

// Public self-registration always creates a STUDENT account.
router.post(
  "/register",
  validateRequest(AuthValidation.RegisterStudentZodSchema),
  AuthController.registerStudent
);

router.post(
  "/verify-email",
  validateRequest(AuthValidation.VerifyEmailZodSchema),
  AuthController.verifyEmail

)

router.post(
  "/login",
  validateRequest(AuthValidation.LoginZodSchema),
  AuthController.loginUser
);

router.get(
  "/me",
  auth(Role.STUDENT, Role.FACULTY, Role.ADMIN),
  AuthController.getMe
);

router.post("/refresh-token", AuthController.refreshToken);

router.post("/logout", auth(), AuthController.logout);

export const AuthRoutes = router;
