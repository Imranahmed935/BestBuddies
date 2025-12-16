import express from "express";
import { userController } from "./user.controller";
import { UserValidation } from "./user.validation";
import validateRequest from "../../zod/validateRequest";

const router = express.Router();

router.post("/register", validateRequest(UserValidation.createUserSchema), userController.createUser);
export const UserRoutes = router;
