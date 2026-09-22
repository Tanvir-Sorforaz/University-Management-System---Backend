import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { AttendanceController } from "./attendance.controller";
import { AttendanceValidation } from "./attendance.validation";

const router = Router();

router.post(
  "/",
  auth(Role.FACULTY),
  validateRequest(AttendanceValidation.MarkAttendanceZodSchema),
  AttendanceController.markAttendance
);

router.get("/my", auth(Role.STUDENT), AttendanceController.getMyAttendance);
router.get("/:id", auth(Role.FACULTY, Role.ADMIN), AttendanceController.getAttendanceById);

export const AttendanceRoutes = router;
