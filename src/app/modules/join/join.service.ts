import { ConnectionStatus, RequestStatus } from "../../../../prisma/generated/prisma";
import { prisma } from "../../shared/prisma";

 const sendRequest = async (
  applicantId: string,
  planId: string
) => {
  const plan = await prisma.travelPlan.findUnique({
    where: { id: planId },
  });

  if (!plan) {
    throw new Error("Travel plan not found");
  }

  if (plan.id === applicantId) {
    throw new Error("You cannot join your own travel plan");
  }
  const existing = await prisma.joinRequest.findFirst({
    where: {
      planId,
      applicantId,
    },
  });

  if (existing) {
    throw new Error("Request already sent");
  }
  return prisma.joinRequest.create({
    data: {
      applicantId,
      planId,
    },
  });
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
  const joinRequest = await prisma.joinRequest.findUnique({
    where: { id: requestId },
    include: { plan: true },
  });

  if (!joinRequest || joinRequest.plan.hostId !== userId) {
    throw new Error("Unauthorized action");
  }

  if (joinRequest.status !== RequestStatus.PENDING) {
    throw new Error("Join request already processed");
  }

  return prisma.joinRequest.update({
    where: { id: requestId },
    data: {
      status:
        action === "ACCEPT"
          ? ConnectionStatus.ACCEPTED
          : ConnectionStatus.REJECTED
    },
  });
};


export const JoinService = {
  sendRequest,
  getMyRequests,
  respondRequest,
};
