import type { AttendanceStatus } from "../../../../generated/prisma/enums.js";
export interface IMarkAttendancePayload {
    semesterId: string;
    studentId: string;
    date: string;
    status: AttendanceStatus;
}
//# sourceMappingURL=attendance.interface.d.ts.map