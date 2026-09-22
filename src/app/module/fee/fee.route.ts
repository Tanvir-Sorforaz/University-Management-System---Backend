import { Router } from "express";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { FeeController } from "./fee.controller";
import { FeeValidation } from "./fee.validation";

const router = Router();

router.post(
  "/",
  auth(Role.ADMIN),
  validateRequest(FeeValidation.CreateFeeZodSchema),
  FeeController.createFee
);

router.get("/my", auth(Role.STUDENT), FeeController.getMyFees);

export const FeeRoutes = router;
