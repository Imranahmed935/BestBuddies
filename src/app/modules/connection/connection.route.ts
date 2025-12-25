import express from "express";

import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";
import { ConnectionController } from "./connection.controller";

const router = express.Router();

router.get("/",auth(Role.USER, Role.ADMIN), ConnectionController.allConnection);
router.get("/friends",auth(Role.USER, Role.ADMIN), ConnectionController.myFriends);
router.get("/pending", auth(Role.USER, Role.ADMIN), ConnectionController.pendingRequests);
router.post("/send", auth(Role.USER, Role.ADMIN),  ConnectionController.sendConnection);
router.patch("/respond",auth(Role.USER, Role.ADMIN),  ConnectionController.respondConnection);

export const connectionRouter =router;
