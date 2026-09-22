import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { ResultController } from "./result.controller";
import { ResultValidation } from "./result.validation";

const router = Router();

router.post(
  "/",
  auth(Role.FACULTY),
  validateRequest(ResultValidation.CreateResultZodSchema),
  ResultController.createResult
);

router.get("/my", auth(Role.STUDENT), ResultController.getMyResults);

router.patch(
  "/:id",
  auth(Role.FACULTY, Role.ADMIN),
  validateRequest(ResultValidation.UpdateResultZodSchema),
  ResultController.updateResult
);

export const ResultRoutes = router;
