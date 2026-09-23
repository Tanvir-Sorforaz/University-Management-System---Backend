import httpStatus from "http-status";
import { AppError } from "../../utils/AppError.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { getRequiredParam } from "../../utils/getRequiredParam.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { TranscriptService } from "./transcript.service.js";
const getMyTranscript = catchAsync(async (req, res) => {
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
const getTranscriptByStudentId = catchAsync(async (req, res) => {
    const studentId = getRequiredParam(req.params, "studentId");
    const result = await TranscriptService.getTranscriptByStudentId(studentId);
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
//# sourceMappingURL=transcript.controller.js.map