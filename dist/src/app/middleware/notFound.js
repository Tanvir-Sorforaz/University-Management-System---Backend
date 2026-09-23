import httpStatus from "http-status";
export const notFound = (req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Route not found",
        path: req.originalUrl,
        date: new Date(),
    });
};
//# sourceMappingURL=notFound.js.map