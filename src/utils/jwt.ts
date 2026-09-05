import jwt, { SignOptions } from "jsonwebtoken";
import { Role } from "../../generated/prisma/enums";
import config from "../config";

export interface JwtPayload {
  userId: string;
  role: Role;
}

export const signAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, config.jwt_access_secret, {
    expiresIn: config.jwt_access_expires_in,
  } as SignOptions);
};

export const signRefreshToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, config.jwt_refresh_secret, {
    expiresIn: config.jwt_refresh_expires_in,
  } as SignOptions);
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwt_access_secret) as JwtPayload;
};

export const verifyRefreshToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwt_refresh_secret) as JwtPayload;
};

/** Convenience helper: issues both tokens at once after login/register. */
export const issueTokenPair = (payload: JwtPayload) => ({
  accessToken: signAccessToken(payload),
  refreshToken: signRefreshToken(payload),
});