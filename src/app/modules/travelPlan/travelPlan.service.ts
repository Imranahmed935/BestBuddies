import { fileUploader } from "../../helpers/imageUpload";
import { prisma } from "../../shared/prisma";


 const createPlan = async (
  payload: any,
  hostId: string,
  file?: Express.Multer.File
) => {
  if (!hostId) {
    throw new Error("Host ID is required");
  }

  const startDate = new Date(payload.startDate);
  const endDate = new Date(payload.endDate);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid startDate or endDate");
  }

  let photoUrl: string | undefined;

  if (file) {
    const uploaded = await fileUploader.uploadCloudinary(file);
    photoUrl = uploaded?.secure_url;
  }

  const result = await prisma.travelPlan.create({
    data: {
      title: payload.title,
      destination: payload.destination,
      startDate,
      endDate,
      budget: Number(payload.budget) || 0,
      travelType: payload.travelType,
      description: payload.description,
      photoUrl,
      ageLimit: payload.ageLimit ? Number(payload.ageLimit) : undefined,
      members: payload.members ? Number(payload.members) : undefined,
      stay: payload.stay,
      accommodationType: payload.accommodationType,
      transportType: payload.transportType,
      mealPlan: payload.mealPlan,
      requiredDocuments: payload.requiredDocuments,
      included: payload.included,
      excluded: payload.excluded,
      meetingPoint: payload.meetingPoint,
      emergencyContact: payload.emergencyContact,
      planStatus: payload.planStatus,
      hostId,
    },
  });

  return result;
};

const getMyTravelPlan = async (id: string) => {
  const result = await prisma.travelPlan.findMany({
    where: {
      hostId: id,
    },
  });
  return result;
};

const getAllTravelPlan = async () => {
  const result = await prisma.travelPlan.findMany({
    include:{
      host:true,
      reviews:true
    }
  });
  return result;
};

const getTravelPlanById = async (id: string) => {
  const result = await prisma.travelPlan.findUnique({
    where: { id: id },
    include:{
      host:true,
      reviews:{
        include:{
          reviewer:true
        }
      },
    }
  });
  return result;
};

const updatePlan = async (payload: any, id: string) => {
  let photoUrl: string | undefined;

  if (payload.file) {
    const uploaded = await fileUploader.uploadCloudinary(payload.file);
    photoUrl = uploaded?.secure_url;
  }

  const updateData: any = {
    title: payload.title,
    destination: payload.destination,
    startDate: payload.startDate ? new Date(payload.startDate) : undefined,
    endDate: payload.endDate ? new Date(payload.endDate) : undefined,
    budget: payload.budget,
    travelType: payload.travelType,
    description: payload.description,
    ageLimit: payload.ageLimit,
    members: payload.members,
    stay: payload.stay,
    accommodationType: payload.accommodationType,
    transportType: payload.transportType,
    mealPlan: payload.mealPlan,
    requiredDocuments: payload.requiredDocuments,
    included: payload.included,
    excluded: payload.excluded,
    meetingPoint: payload.meetingPoint,
    emergencyContact: payload.emergencyContact,
    planStatus: payload.planStatus,
  };

  if (photoUrl) {
    updateData.photoUrl = photoUrl;
  }

  const result = await prisma.travelPlan.update({
    where: { id },
    data: updateData,
  });

  return result;
};


const deletePlan = async (id: string) => {
  await prisma.joinRequest.deleteMany({
    where: { planId: id },
  });
  const result = await prisma.travelPlan.delete({
    where: { id },
  });

  return result;
};


export const travelPlanService = {
  createPlan,
  getMyTravelPlan,
  getTravelPlanById,
  deletePlan,
  updatePlan,
  getAllTravelPlan
};
