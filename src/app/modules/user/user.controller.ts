import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { userService } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createUser(req);
  sendResponse(res,{
    statusCode:201,
    success:true,
    message:"User Created Successfully!!",
    data:result
  })
});

export const userController = {
    createUser,
}