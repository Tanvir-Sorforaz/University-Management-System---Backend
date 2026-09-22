import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { ExamController } from "./exam.controller";
import { ExamValidation } from "./exam.validation";

const router = Router();

router.post(
  "/",
  auth(Role.FACULTY),
  validateRequest(ExamValidation.CreateExamZodSchema),
  ExamController.createExam
);

router.get("/:id", auth(), ExamController.getExamById);

router.patch(
  "/:id",
  auth(Role.FACULTY, Role.ADMIN),
  validateRequest(ExamValidation.UpdateExamZodSchema),
  ExamController.updateExam
);

router.delete("/:id", auth(Role.FACULTY, Role.ADMIN), ExamController.deleteExam);

export const ExamRoutes = router;
