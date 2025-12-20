import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { travelPlanService } from "./travelPlan.service";
import { IJWTPayload } from "../../types/common";

const createPlan = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const hostId = req.user?.id;

    const result = await travelPlanService.createPlan(
      req.body,
      hostId!,
      req.file
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Travel Plan created Successfully!",
      data: result,
    });
  }
);

const getMyTravelPlan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await travelPlanService.getMyTravelPlan(id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "My Travel Plan retrived Successfully!",
    data: result,
  });
});

const getAllTravelPlan = catchAsync(async (req: Request, res: Response) => {
  const result = await travelPlanService.getAllTravelPlan();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "My Travel Plan retrived Successfully!",
    data: result,
  });
});

const getTravelPlanById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("ID:", id);
  const result = await travelPlanService.getTravelPlanById(id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Travel Plan Retrived Successfully!",
    data: result,
  });
});

const updatePlan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  let payload = req.body;
  if (req.body.data) {
    payload = JSON.parse(req.body.data);
  }

  if (req.file) {
    payload.file = req.file;
  }

  const result = await travelPlanService.updatePlan(payload, id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Travel Plan Updated Successfully!",
    data: result,
  });
});


const deletePlan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await travelPlanService.deletePlan(id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Travel Plan Deleted Successfully!",
    data: result,
  });
});

export const travelPlanController = {
  createPlan,
  getMyTravelPlan,
  getTravelPlanById,
  deletePlan,
  updatePlan,
  getAllTravelPlan
};
