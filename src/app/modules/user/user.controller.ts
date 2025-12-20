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

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await userService.getUserById(id as string);
  sendResponse(res,{
    statusCode:201,
    success:true,
    message:"get single User by id Successfully!!",
    data:result
  })
});


const getUserAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getUserAllUser();
  sendResponse(res,{
    statusCode:201,
    success:true,
    message:"get all user Successfully!!",
    data:result
  })
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.updateProfile(req);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile Updated Successfully!!",
    data: result,
  });

});


const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.deleteUser(req.params.id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Delete user Successfully!!",
    data: result,
  });
});


export const userController = {
    createUser,
    updateProfile,
    getUserById,
    deleteUser,
    getUserAllUser
}