import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { SemesterController } from "./semester.controller";
import { SemesterValidation } from "./semester.validation";

const router = Router();

// ?department=CSE&page=1&limit=10
router.get("/", auth(), SemesterController.getAllSemesters);
router.get("/:id", auth(), SemesterController.getSemesterById);

router.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest(SemesterValidation.UpdateSemesterZodSchema),
  SemesterController.updateSemester
);

export const SemesterRoutes = router;
