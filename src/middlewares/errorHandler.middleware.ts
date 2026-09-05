import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { ApiError } from "../utils/ApiError";
// import { logger } from "../utils/logger";
import config from "../config";


/**
 * Catches every error passed to next(err) and converts it into the
 * project's standard error response shape:
 * { success: false, message: string, errors: [] }
 */
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  let errors: unknown[] = [];

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors ?? [];
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    statusCode = 400;
    if (err.code === "P2002") {
      const target = (err.meta?.target as string[] | undefined)?.join(", ");
      message = `A record with this ${target ?? "value"} already exists`;
    } else if (err.code === "P2025") {
      statusCode = 404;
      message = "Requested record was not found";
    } else {
      message = "Database request error";
    }
  } else if (err instanceof Error) {
    message = err.message;
  }

  // logger.error({
  //   path: req.originalUrl,
  //   method: req.method,
  //   message,
  //   stack: err instanceof Error ? err.stack : undefined,
  // });

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    ...(config.node_env === "development" && err instanceof Error
      ? { stack: err.stack }
      : {}),
  });
};