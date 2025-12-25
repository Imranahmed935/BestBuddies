import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { travelPlanRoutes } from "../modules/travelPlan/travelPlan.routes";
import { paymentRoutes } from "../modules/payment/payment.routes";
import { reviewRoutes } from "../modules/review/review.routes";
import { connectionRouter } from "../modules/connection/connection.route";
import { adminRoutes } from "../modules/admin/admin.routes";
import { joinRouter } from "../modules/join/join.routes";
import { notificationRouter } from "../modules/notification/notification.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: adminRoutes,
  },
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

  {
    path: "/join",
    route: joinRouter,
  },
  {
    path: "/notification",
    route: notificationRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
