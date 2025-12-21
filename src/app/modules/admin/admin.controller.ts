import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { adminService } from "./admin.service";
import { Status } from "../../../../prisma/generated/prisma";



const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllUser();
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"User retrived Successfully!!",
    data:result
  })
});

const getAllPayment = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllPayment();
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"all payment retrived Successfully!!",
    data:result
  })
});


const getPaymentById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await adminService.getPaymentById(id as string);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"single payment retrived Successfully!!",
    data:result
  })
});
const deletePaymentById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await adminService.deletePaymentById(id as string);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:" payment deleted Successfully!!",
    data:result
  })
});


const getUserById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await adminService.getUserById(id as string);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"single user retrived Successfully!!",
    data:result
  })
});

const deleteReviewById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await adminService.deleteReviewById(id as string);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"Delete review Successfully!!",
    data:result
  })
});


const updateStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { userStatus } = req.body;

  const result = await adminService.updateStatus(id as string, {
    userStatus: userStatus as Status,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User status updated successfully!",
    data: result,
  });
});


const deleteUserById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await adminService.deleteUserById(id as string);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"user deleted Successfully!!",
    data:result
  })
});


const softDelete = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const {status} = req.body
  const result = await adminService.softDelete(id as string, status);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"user deleted Successfully!!",
    data:result
  })
});


const getAllTravelPlan = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllTravelPlan();
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"All Travel Plan retrived Successfully!!",
    data:result
  })
});


const getPlanById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.getPlanById(id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Plan retrieved successfully!",
    data: result
  });
});

const deletePlanById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.deletePlanById(id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Plan deleted successfully!",
    data: result
  });
});


const getAllReview = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllReview();
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"All Review retrived Successfully!!",
    data:result
  })
});

 const getAdminStats = catchAsync(async (req: Request, res: Response) => {
  const stats = await adminService.getAdminStats();
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Admin stats retrieved successfully!",
    data: stats.data ? stats.data : stats,
  });
});


 const getVerifiedUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getVerifiedUser();
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "verified user retrieved successfully!",
    data:result ,
  });
});

export const adminController ={
    getAllUser,
    getAllTravelPlan,
    getAllReview,
    getUserById,
    deleteUserById,
    softDelete,
    getPlanById,
    deletePlanById,
    updateStatus,
    deleteReviewById,
    getAdminStats,
    getVerifiedUser,
    getAllPayment,
    getPaymentById,
    deletePaymentById  
}