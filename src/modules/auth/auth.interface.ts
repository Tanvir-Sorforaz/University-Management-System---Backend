import { Role } from "../../../generated/prisma/enums";

/**
 * Public self-registration only creates STUDENT accounts.
 * FACULTY and ADMIN accounts are created by an ADMIN via the admin module
 * (see admin.service.ts) — never through this public endpoint.
 */
export interface IRegisterPayload {
  email: string;
  password: string;
  programId: string;
  studentId?: string; // auto-generated when omitted
  phone?: string;
  address?: string;
  dateOfBirth?: string; // ISO date string
}

export interface ILoginPayload {
  email: string;
  password: string;
}

/** Sanitized user shape — never includes the password hash. */
export interface ISafeUser {
  id: string;
  email: string;
  role: Role;
  isActive: boolean;
}

export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResult {
  user: ISafeUser;
  tokens: IAuthTokens;
}
