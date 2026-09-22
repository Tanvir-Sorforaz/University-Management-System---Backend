import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Application, type Request, type Response } from "express";
import httpStatus from "http-status";
import config from "./app/config";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import { AuthRoutes } from "./app/module/auth/auth.route";
import { NotificationRoutes } from "./app/module/notification/notification.route";
import { TranscriptRoutes } from "./app/module/transcript/transcript.route";
import { ResultRoutes } from "./app/module/result/result.route";
import { ExamRoutes } from "./app/module/exam/exam.route";
import { AttendanceRoutes } from "./app/module/attendance/attendance.route";
import { EnrollmentRoutes } from "./app/module/enrollment/enrollment.route";
// import { PaymentRoutes } from "./app/module/payment/payment.route";
import { FeeRoutes } from "./app/module/fee/fee.route";
import { SemesterRoutes } from "./app/module/semester/semester.route";
import { AdminRoutes } from "./app/module/admin/admin.route";


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
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/semesters", SemesterRoutes);
app.use("/api/v1/fees", FeeRoutes);
// app.use("/api/v1/payments", PaymentRoutes);
app.use("/api/v1/enrollments", EnrollmentRoutes);
app.use("/api/v1/attendance", AttendanceRoutes);
app.use("/api/v1/exams", ExamRoutes);
app.use("/api/v1/results", ResultRoutes);
app.use("/api/v1/transcripts", TranscriptRoutes);
app.use("/api/v1/notifications", NotificationRoutes);





app.get("/", (_req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome to the University Management System Backend",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
