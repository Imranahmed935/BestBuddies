import express from "express";
import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";
import { JoinController } from "./join.controller";



const router = express.Router();

router.post("/send", auth(Role.ADMIN, Role.USER), JoinController.sendRequest);
router.get("/pending", auth(Role.ADMIN, Role.USER), JoinController.getMyRequests);
router.patch("/respond", auth(Role.ADMIN, Role.USER), JoinController.respondRequest);

export const joinRouter =  router;
