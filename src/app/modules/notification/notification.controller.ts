import { Request, Response } from "express";
import { IJWTPayload } from "../../types/common";
import { NotificationService } from "./notification.service";
import sendResponse from "../../shared/sendResponse";

const getNotification = async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id
  const result = await NotificationService.getNotification(userId as string)
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"done",
    data:result
  })
};
export const notificationController = {
  getNotification,
};
