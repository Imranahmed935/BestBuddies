import express, { NextFunction, Request, Response } from "express";
import { travelPlanController } from "./travelPlan.controller";
import auth from "../../middleware/auth";
import { Role } from "../../../../prisma/generated/prisma";
import { fileUploader } from "../../helpers/imageUpload";

const router = express.Router();

router.get("/", travelPlanController.getAllTravelPlan);
router.get("/my-plan/:id", travelPlanController.getMyTravelPlan);
router.get("/:id", travelPlanController.getTravelPlanById);

router.post(
  "/create",
  auth(Role.USER),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return travelPlanController.createPlan(req, res, next);
  }
);

router.patch(
  "/:id",
  auth(Role.USER),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return travelPlanController.updatePlan(req, res, next);
  }
);


router.delete("/:id", auth(Role.USER), travelPlanController.deletePlan);

export const travelPlanRoutes = router;
