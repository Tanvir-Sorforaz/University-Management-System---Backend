import type { Request, Response } from "express";
import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { TranscriptService } from "./transcript.service";

const getMyTranscript = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new AppError(httpStatus.UNAUTHORIZED, "User information is missing in the request");
  }

  const result = await TranscriptService.getMyTranscript(req.user.userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Transcript fetched successfully",
    data: result,
  });
});

const getTranscriptByStudentId = catchAsync(async (req: Request, res: Response) => {
  const result = await TranscriptService.getTranscriptByStudentId(req.params.studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Transcript fetched successfully",
    data: result,
  });
});

export const TranscriptController = {
  getMyTranscript,
  getTranscriptByStudentId,
};
