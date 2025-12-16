import express from "express";
import { authController } from "./auth.controller";
const router = express.Router();


router.get("/me", authController.getMe);
router.post("/login", authController.login);
router.post("/logout", authController.logOut);

export const authRoutes = router;
