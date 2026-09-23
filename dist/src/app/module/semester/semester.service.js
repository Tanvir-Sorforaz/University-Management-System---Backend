import httpStatus from "http-status";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/AppError.js";
import { buildMeta, parseQuery } from "../../utils/pagination.js";
const getAllSemesters = async (query) => {
    const { skip, take, orderBy, page, limit } = parseQuery(query);
    const where = { deletedAt: null };
    if (query.department) {
        where.department = query.department;
    }
    const [semesters, total] = await Promise.all([
        prisma.semester.findMany({
            where,
            skip,
            take,
            orderBy: orderBy ?? [{ department: "asc" }, { semesterNumber: "asc" }],
        }),
        prisma.semester.count({ where }),
    ]);
    return { semesters, meta: buildMeta(page, limit, total) };
};
const getSemesterById = async (id) => {
    const semester = await prisma.semester.findUnique({ where: { id } });
    if (!semester || semester.deletedAt) {
        throw new AppError(httpStatus.NOT_FOUND, "Semester not found");
    }
    return semester;
};
const updateSemester = async (id, payload) => {
    await getSemesterById(id);
    return prisma.semester.update({
        where: { id },
        data: payload,
    });
};
export const SemesterService = {
    getAllSemesters,
    getSemesterById,
    updateSemester,
};
//# sourceMappingURL=semester.service.js.map