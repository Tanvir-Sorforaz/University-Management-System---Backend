import httpStatus from "http-status";
import { AppError } from "../../utils/AppError.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import config from "../../config/index.js";
import { AuthService } from "./auth.service.js";
const ACCESS_TOKEN_MAX_AGE = 1000 * 60 * 60 * 24; // 1 day
const REFRESH_TOKEN_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // 7 days
const setAuthCookies = (res, accessToken, refreshToken) => {
    const cookieOptions = {
        httpOnly: true,
        secure: config.node_env === "production",
        sameSite: "lax",
    };
    res.cookie("accessToken", accessToken, {
        ...cookieOptions,
        maxAge: ACCESS_TOKEN_MAX_AGE,
    });
    res.cookie("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: REFRESH_TOKEN_MAX_AGE,
    });
};
const registerStudent = catchAsync(async (req, res) => {
    await AuthService.registerStudent(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Verification OTP sent to your email",
        data: null,
    });
});
const verifyEmail = catchAsync(async (req, res) => {
    const result = await AuthService.verifyStudentEmail(req.body);
    const { accessToken, refreshToken, user } = result;
    setAuthCookies(res, accessToken, refreshToken);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Email verified successfully",
        data: { user, accessToken, refreshToken },
    });
});
const loginUser = catchAsync(async (req, res) => {
    const result = await AuthService.loginUser(req.body);
    const { accessToken, refreshToken, user } = result;
    setAuthCookies(res, accessToken, refreshToken);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Logged in successfully",
        data: { user, accessToken, refreshToken },
    });
});
const getMe = catchAsync(async (req, res) => {
    if (!req.user) {
        throw new AppError(httpStatus.UNAUTHORIZED, "User information is missing in the request");
    }
    const result = await AuthService.getMe(req.user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile fetched successfully",
        data: result,
    });
});
const refreshToken = catchAsync(async (req, res) => {
    const incomingToken = req.cookies?.refreshToken ?? req.body?.refreshToken;
    if (!incomingToken) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Refresh token is missing");
    }
    const result = await AuthService.refreshToken(incomingToken);
    const { accessToken, refreshToken: newRefreshToken } = result;
    setAuthCookies(res, accessToken, newRefreshToken);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "New tokens generated successfully",
        data: { accessToken, refreshToken: newRefreshToken },
    });
});
const logout = catchAsync(async (_req, res) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Logged out successfully",
        data: null,
    });
});
export const AuthController = {
    registerStudent,
    verifyEmail,
    loginUser,
    getMe,
    refreshToken,
    logout,
};
//# sourceMappingURL=auth.controller.js.map