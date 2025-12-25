import { Request, Response } from "express";
import { ConnectionService } from "./connection.service";
import sendResponse from "../../shared/sendResponse";
import { IJWTPayload } from "../../types/common";


const allConnection = async (req: Request, res: Response) => {
  
  const result = await ConnectionService.allConnection();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Connection Retrived Successfully",
    data: result,
  });
};

const sendConnection = async (req: Request  & { user?: IJWTPayload }, res: Response) => {
  const senderId = req.user?.id; 
  const { receiverId } = req.body;

  const result = await ConnectionService.sendConnection(senderId as string, receiverId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Connection request sent",
    data: result,
  });
};

const respondConnection = async (req: Request  & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id;
  const { connectionId, action } = req.body;
  const result = await ConnectionService.respondConnection(
    connectionId,
    userId as string,
    action
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: `Connection request ${action.toLowerCase()}ed`,
    data: result,
  });
};

const myFriends = async (req: Request  & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id;
  const result = await ConnectionService.myFriends(userId as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Friends retrieved successfully",
    data: result,
  });
};

const pendingRequests = async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id;
  const result = await ConnectionService.pendingRequests(userId as string);
  sendResponse(res, {   
    statusCode: 200,
    success: true,
    message: "Pending requests retrieved successfully",
    data: result,
  });
};

export const ConnectionController = {
  sendConnection,
  respondConnection,
  myFriends,
  pendingRequests,
  allConnection
};
