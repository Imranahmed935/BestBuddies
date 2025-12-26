import express from "express";
import { authController } from "./auth.controller";
import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";
const router = express.Router();


router.get("/me", authController.getMe);
router.post("/login", authController.login);
router.post("/logout", authController.logOut);
router.post(
  "/change-password",auth(Role.ADMIN, Role.USER), authController.changePassword
);
export const authRoutes = router;
