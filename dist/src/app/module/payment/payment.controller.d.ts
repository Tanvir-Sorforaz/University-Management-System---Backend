import type { Request, Response } from "express";
export declare const PaymentController: {
    initiatePayment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    handleCallback: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPaymentById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=payment.controller.d.ts.map