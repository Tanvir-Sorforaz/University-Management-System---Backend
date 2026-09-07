import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Application, type Request, type Response } from "express";
import httpStatus from "http-status";
import config from "./app/config";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import { AuthRoutes } from "./app/module/auth/auth.route";
// import { UserRoutes } from "./app/module/user/user.route";
// import { DepartmentRoutes } from "./app/module/department/department.route";
// import { ProgramRoutes } from "./app/module/program/program.route";
// ...remaining module routes are mounted here as they're built

const app: Application = express();

app.use(
  cors({
    origin: config.frontend_url,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", AuthRoutes);




// app.use("/api/v1/users", UserRoutes);
// app.use("/api/v1/departments", DepartmentRoutes);
// app.use("/api/v1/programs", ProgramRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome to the University Management System Backend",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
