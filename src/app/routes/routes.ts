import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { travelPlanRoutes } from "../modules/travelPlan/travelPlan.routes";
import { paymentRoutes } from "../modules/payment/payment.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/travel-plan",
    route: travelPlanRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
