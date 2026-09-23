export class AppError extends Error {
    statusCode;
    constructor(statusCode, message, stack = "") {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
// throw new AppError(404, "Program not found")
//# sourceMappingURL=AppError.js.map