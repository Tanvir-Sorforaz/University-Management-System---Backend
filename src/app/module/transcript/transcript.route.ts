import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { TranscriptController } from "./transcript.controller";

const router = Router();

router.get("/my", auth(Role.STUDENT), TranscriptController.getMyTranscript);
router.get(
  "/:studentId",
  auth(Role.ADMIN, Role.FACULTY),
  TranscriptController.getTranscriptByStudentId
);

export const TranscriptRoutes = router;
