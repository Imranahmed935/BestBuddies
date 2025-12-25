import { Router } from "express";
import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";
import { notificationController } from "./notification.controller";


const router = Router();


router.get("/",auth(Role.USER, Role.ADMIN), notificationController.getNotification);;

export const notificationRouter= router;
