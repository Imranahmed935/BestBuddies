import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { reviewsService } from "./review.service";

const createReview = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewsService.createReview(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Review Created Successfully",
    data: result,
  });
});

const getAllReview = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await reviewsService.getAllReview(id as string);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "all Review retrived Successfully",
    data: result,
  });
});

const getReviewById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await reviewsService.getReviewById(id as string);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "all Review retrived Successfully",
    data: result,
  });
});


const updateReview = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await reviewsService.updateReview(req.body, id as string);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Review Updated Successfully",
    data: result,
  });
});


const getAllTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewsService.getAllTestimonial();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Review retrived Successfully",
    data: result,
  });
});


const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await reviewsService.deleteReview(id as string);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Review deleted Successfully",
    data: result,
  });
});

export const reviewController = {
  createReview,
  getAllReview,
  getReviewById,
  updateReview,
  deleteReview,
  getAllTestimonial

};
