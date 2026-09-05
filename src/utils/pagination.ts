export interface PaginationQuery {
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: string;
}

export interface ParsedPagination {
  page: number;
  limit: number;
  skip: number;
  take: number;
  orderBy: Record<string, "asc" | "desc"> | undefined;
}

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

/**
 * Parses ?page=&limit=&sortBy=&sortOrder= into Prisma-ready skip/take/orderBy.
 * Usage:
 *   const { skip, take, orderBy, page, limit } = parsePagination(req.query);
 *   const [items, total] = await Promise.all([
 *     prisma.course.findMany({ skip, take, orderBy, where }),
 *     prisma.course.count({ where }),
 *   ]);
 *   sendSuccess(res, { message: "...", data: items, meta: buildMeta(page, limit, total) });
 */
export const parsePagination = (query: PaginationQuery): ParsedPagination => {
  const page = Math.max(Number(query.page) || DEFAULT_PAGE, 1);
  const limit = Math.min(
    Math.max(Number(query.limit) || DEFAULT_LIMIT, 1),
    MAX_LIMIT
  );

  // orderBy can either be undefined, or an object where every value MUST be "asc" or "desc"
  const orderBy: Record<string, "asc" | "desc"> | undefined = query.sortBy
  ? {
      [query.sortBy]: query.sortOrder === "desc" ? "desc" : "asc",
    }
  : undefined;

  return {
    page,
    limit,
    skip: (page - 1) * limit,
    take: limit,
    orderBy,
  };
};

export const buildMeta = (page: number, limit: number, total: number) => ({
  page,
  limit,
  total,
  totalPages: Math.ceil(total / limit),
});