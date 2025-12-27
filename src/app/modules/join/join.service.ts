import { ConnectionStatus, NotificationType, RequestStatus } from "../../../../prisma/generated/prisma";
import { prisma } from "../../shared/prisma";
import { getIO } from "../../shared/socket";



const sendRequest = async (applicantId: string, planId: string) => {
  const plan = await prisma.travelPlan.findUnique({
    where: { id: planId },
  });

  if (!plan) throw new Error("Travel plan not found");

  if (plan.hostId === applicantId) {
    throw new Error("You cannot join your own travel plan");
  }

  const existing = await prisma.joinRequest.findFirst({
    where: { planId, applicantId },
  });

  if (existing) throw new Error("Request already sent");

  const request = await prisma.joinRequest.create({
    data: {
      applicantId,
      planId,
      status: RequestStatus.PENDING,
    },
    include: {
      applicant: true,
      plan: true,
    },
  });

  const notification = await prisma.notification.create({
    data: {
      receiverId: plan.hostId,
      senderId: applicantId,
      type: "TRIP_JOIN_REQUEST",
      title: "New Join Request",
      message: `${request.applicant.fullName} wants to join your trip`,
      metadata: {
        joinRequestId: request.id,
        planId,
      },
    },
  });


  const io = getIO();
  io.to(plan.hostId).emit("notification", notification);

  return request;
};


 const getMyRequests = async (userId: string) => {
  return prisma.joinRequest.findMany({
    where: {
      applicantId: userId,
    },
    include: {
      applicant:true,
      plan:true
    },
  });
};

const respondRequest = async (
  requestId: string,
  userId: string,
  action: "ACCEPT" | "REJECT"
) => {
  console.log(requestId, action)
  const joinRequest = await prisma.joinRequest.findUnique({
    where: { id: requestId },
    include: {
      plan: true,
      applicant: true,
    },
  });

  if (!joinRequest) {
    throw new Error("Join request not found");
  }

  if (joinRequest.plan.hostId !== userId) {
    throw new Error("Unauthorized action");
  }

  if (joinRequest.status !== RequestStatus.PENDING) {
    throw new Error("Join request already processed");
  }

  const updated = await prisma.joinRequest.update({
    where: { id: requestId },
    data: {
      status:
        action === "ACCEPT"
          ? RequestStatus.ACCEPTED
          : RequestStatus.REJECTED,
    },
  });

  const notification = await prisma.notification.create({
    data: {
      receiverId: joinRequest.applicantId,
      senderId: userId,
      type:
        action === "ACCEPT"
          ? NotificationType.TRIP_JOIN_ACCEPTED
          : NotificationType.TRIP_JOIN_REJECTED,
      title: `Join Request ${action.toLowerCase()}`,
      message: `Your request to join "${joinRequest.plan.title}" was accepted}`,
      metadata: {
        joinRequestId: requestId,
        planId: joinRequest.planId,
      },
    },
  });

  const io = getIO();
  io.to(joinRequest.applicantId).emit("notification", notification);

  return updated;
};

export const JoinService = {
  sendRequest,
  getMyRequests,
  respondRequest,
};
