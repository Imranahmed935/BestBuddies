import { Request, Response } from "express";

import sendResponse from "../../shared/sendResponse";
import { paymentService } from "./payment.service";

const createCheckoutSession = async (req: Request, res: Response) => {
  const result = await paymentService.createCheckoutSession(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Checkout session created",
    data: result,
  });
};

export const handleWebhook = async (req: Request, res: Response) => {
  await paymentService.handleWebhook(req);
  res.json({ received: true });
};


export const paymentController = {
  createCheckoutSession,
  handleWebhook,
};
