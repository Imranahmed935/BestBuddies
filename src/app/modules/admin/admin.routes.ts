import express from "express";
import { adminController } from "./admin.controller";
import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";



const router = express.Router();
router.get("/users", auth(Role.ADMIN), adminController.getAllUser);
router.get(
  "/travelPlans",
  auth(Role.ADMIN),
  adminController.getAllTravelPlan
);
router.get(
  "/allReviews",
  auth(Role.ADMIN),
  adminController.getAllReview
);

router.get(
  "/payments",
  auth(Role.ADMIN),
  adminController.getAllPayment
);

router.get("/payment/:id", auth(Role.ADMIN), adminController.getPaymentById);
router.delete("/payment/:id", auth(Role.ADMIN), adminController.deletePaymentById)


router.get("/stats", auth(Role.ADMIN), adminController.getAdminStats);
router.get("/verify", auth(Role.ADMIN), adminController.getVerifiedUser);

router.get("/:id", auth(Role.ADMIN), adminController.getUserById);
router.patch("/:id", auth(Role.ADMIN), adminController.updateStatus);

router.delete("/:id", auth(Role.ADMIN), adminController.deleteUserById);
router.delete("/soft/:id", auth(Role.ADMIN), adminController.softDelete);

router.delete("/review/:id", auth(Role.ADMIN), adminController.deleteReviewById);

router.get("/plan/:id", auth(Role.ADMIN), adminController.getPlanById);
router.delete("/plans/:id", auth(Role.ADMIN), adminController.deletePlanById);

export const adminRoutes = router;
