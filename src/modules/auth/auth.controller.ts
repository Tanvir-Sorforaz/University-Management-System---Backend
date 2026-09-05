import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendCreated, sendSuccess } from "../../utils/apiResponse";
import config from "../../config";
import { AuthService } from "./auth.service";

const REFRESH_TOKEN_COOKIE = "refreshToken";

const refreshCookieOptions = {
  httpOnly: true,
  secure: config.node_env === "production",
  sameSite: "lax" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // keep in sync with JWT_REFRESH_EXPIRES_IN
};

const setRefreshTokenCookie = (res: Response, token: string) => {
  res.cookie(REFRESH_TOKEN_COOKIE, token, refreshCookieOptions);
};

const register = catchAsync(async (req: Request, res: Response) => {
  const { user, tokens } = await AuthService.registerStudent(req.body);

  setRefreshTokenCookie(res, tokens.refreshToken);

  sendCreated(res, "Account registered successfully", {
    user,
    accessToken: tokens.accessToken,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const { user, tokens } = await AuthService.loginUser(req.body);

  setRefreshTokenCookie(res, tokens.refreshToken);

  sendSuccess(res, {
    message: "Logged in successfully",
    data: { user, accessToken: tokens.accessToken },
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const incomingToken: string | undefined =
    req.cookies?.[REFRESH_TOKEN_COOKIE] ?? req.body?.refreshToken;

  const tokens = await AuthService.refreshAccessToken(incomingToken);

  setRefreshTokenCookie(res, tokens.refreshToken);

  sendSuccess(res, {
    message: "Access token refreshed successfully",
    data: { accessToken: tokens.accessToken },
  });
});

const logout = catchAsync(async (_req: Request, res: Response) => {
  res.clearCookie(REFRESH_TOKEN_COOKIE, refreshCookieOptions);

  sendSuccess(res, {
    statusCode: httpStatus.OK,
    message: "Logged out successfully",
  });
});

export const AuthController = {
  register,
  login,
  refreshToken,
  logout,
};
