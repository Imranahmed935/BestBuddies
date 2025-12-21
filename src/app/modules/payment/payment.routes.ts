import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();


router.post("/create-checkout-session", paymentController.createCheckoutSession);



export const paymentRoutes = router;
