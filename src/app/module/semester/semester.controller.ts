import type { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SemesterService } from "./semester.service";

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const { semesters, meta } = await SemesterService.getAllSemesters(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semesters fetched successfully",
    data: semesters,
    meta,
  });
});

const getSemesterById = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterService.getSemesterById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester fetched successfully",
    data: result,
  });
});

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterService.updateSemester(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester updated successfully",
    data: result,
  });
});

export const SemesterController = {
  getAllSemesters,
  getSemesterById,
  updateSemester,
};
