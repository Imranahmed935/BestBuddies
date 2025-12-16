import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controller";
import { UserValidation } from "./user.validation";
import validateRequest from "../../zod/validateRequest";
import { fileUploader } from "../../helpers/imageUpload";
import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";

const router = express.Router();

router.get("/:id", userController.getUserById);
router.get("/", userController.getUserAllUser);

router.post("/register", validateRequest(UserValidation.createUserSchema), userController.createUser);
router.patch(
  "/:id",
  auth(Role.USER),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    return userController.updateProfile(req, res, next);
  }
);

router.delete("/:id", userController.deleteUser);

export const UserRoutes = router;
