import { z } from "zod";

// validateRequest (see middlewares/validate.middleware.ts) parses req.body
// directly against these schemas — no { body: ... } wrapper.

export const registerValidationSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
  programId: z.string().min(1, "programId is required"),
  studentId: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  address: z.string().trim().optional(),
  dateOfBirth: z.string().datetime().optional(),
});

export const loginValidationSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Only needed as a fallback when the refresh token isn't sent via the
// httpOnly cookie (e.g. a non-browser API client).
export const refreshTokenValidationSchema = z.object({
  refreshToken: z.string().min(1).optional(),
});

export type RegisterInput = z.infer<typeof registerValidationSchema>;
export type LoginInput = z.infer<typeof loginValidationSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenValidationSchema>;
