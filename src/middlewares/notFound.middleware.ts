import { Request, Response } from "express";

/**
 * Catches any request that didn't match a defined route.
 * Must be registered after all routes and before errorHandler.
 */
export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route not found - ${req.method} ${req.originalUrl}`,
    errors: [],
  });
};