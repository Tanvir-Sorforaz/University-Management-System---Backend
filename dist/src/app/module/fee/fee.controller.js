import httpStatus from "http-status";
import { AppError } from "../../utils/AppError.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { FeeService } from "./fee.service.js";
const createFee = catchAsync(async (req, res) => {
    const result = await FeeService.createFee(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Fee invoice created successfully",
        data: result,
    });
});
const getMyFees = catchAsync(async (req, res) => {
    if (!req.user) {
        throw new AppError(httpStatus.UNAUTHORIZED, "User information is missing in the request");
    }
    const { fees, meta } = await FeeService.getMyFees(req.user.userId, req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Fees fetched successfully",
        data: fees,
        meta,
    });
});
export const FeeController = {
    createFee,
    getMyFees,
};
//# sourceMappingURL=fee.controller.js.map