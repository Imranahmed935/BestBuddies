import { Request, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import { IJWTPayload } from "../../types/common";
import { JoinService } from "./join.service";



 const sendRequest = async (
  req: Request & { user?: IJWTPayload },
  res: Response
) => {
  try {
    const { travelId } = req.body;
    const applicantId = req.user?.id;
    if (!applicantId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const result = await JoinService.sendRequest(
      applicantId,
      travelId
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Join request sent successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


 const getMyRequests = async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id;
  const result = await JoinService.getMyRequests(userId as string);

  sendResponse(res,{
    statusCode:200,
    success: true,
    message: "my join request retrived successfully",
    data: result,
  });
};


 const respondRequest = async (
  req: Request & { user?: IJWTPayload },
  res: Response
) => {
  try {
    const { requestId, action } = req.body;
    const userId = req.user?.id;

    const result = await JoinService.respondRequest(
      requestId,
      userId as string,
      action
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Join request ${action.toLowerCase()}ed`,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const JoinController ={
    sendRequest,
    getMyRequests,
    respondRequest
}