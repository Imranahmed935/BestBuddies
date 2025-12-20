import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { travelPlanRoutes } from "../modules/travelPlan/travelPlan.routes";
import { paymentRoutes } from "../modules/payment/payment.routes";
import { reviewRoutes } from "../modules/review/review.routes";
import { connectionRouter } from "../modules/connection/connection.route";

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
  
  {
    path: "/review",
    route: reviewRoutes,
  },
  {
    path: "/connection",
    route: connectionRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
