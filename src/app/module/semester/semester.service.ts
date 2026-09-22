import httpStatus from "http-status";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { buildMeta, parseQuery } from "../../utils/pagination";
import type { IQuery } from "../../interfaces";
import type { IUpdateSemesterPayload } from "./semester.interface";

const getAllSemesters = async (query: IQuery) => {
  const { skip, take, orderBy, page, limit } = parseQuery(query);

  const where: Record<string, unknown> = { deletedAt: null };
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

const getSemesterById = async (id: string) => {
  const semester = await prisma.semester.findUnique({ where: { id } });

  if (!semester || semester.deletedAt) {
    throw new AppError(httpStatus.NOT_FOUND, "Semester not found");
  }

  return semester;
};

const updateSemester = async (id: string, payload: IUpdateSemesterPayload) => {
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
