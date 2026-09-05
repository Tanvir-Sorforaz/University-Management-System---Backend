import { Response } from "express";

/**
 * Enforces the project's standardized JSON response shape:
 * Success: { success: true, message, data }
 * Error:   { success: false, message, errors }
 * (error responses are produced by errorHandler.middleware.ts instead)
 */

interface SuccessPayload<T> {
  statusCode?: number;
  message: string;
  data?: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export const sendSuccess = <T>(res: Response, payload: SuccessPayload<T>) => {
  const { statusCode = 200, message, data, meta } = payload;

  return res.status(statusCode).json({
    success: true,
    message,
    data: data ?? null,
    ...(meta ? { meta } : {}),
  });
};

export const sendCreated = <T>(res: Response, message: string, data: T) =>
  sendSuccess(res, { statusCode: 201, message, data });