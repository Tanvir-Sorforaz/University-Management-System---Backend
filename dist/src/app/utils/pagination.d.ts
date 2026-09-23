import type { IQuery } from "../interfaces/index.js";
export declare const parseQuery: (query: IQuery) => {
    page: number;
    limit: number;
    skip: number;
    take: number;
    orderBy: {
        [x: string]: string;
    } | undefined;
};
export declare const buildMeta: (page: number, limit: number, total: number) => {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};
//# sourceMappingURL=pagination.d.ts.map