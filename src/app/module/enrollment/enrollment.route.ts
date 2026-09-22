import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { EnrollmentController } from "./enrollment.controller";
import { EnrollmentValidation } from "./enrollment.validation";

const router = Router();

router.post(
  "/",
  auth(Role.STUDENT),
  validateRequest(EnrollmentValidation.CreateEnrollmentZodSchema),
  EnrollmentController.createEnrollment
);

router.get("/my", auth(Role.STUDENT), EnrollmentController.getMyEnrollments);

export const EnrollmentRoutes = router;
