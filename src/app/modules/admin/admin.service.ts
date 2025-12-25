import { Status } from "../../../../prisma/generated/prisma";
import { prisma } from "../../shared/prisma";

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN",
      },
    },
  });
  return result;
};


const getAllPayment = async () => {
  const result = await prisma.payment.findMany({
    include:{
      user:true
    }
  });
  
  return result;
};


const getPaymentById = async (id: string) => {
  const result = await prisma.payment.findUnique({
    where: { id },
  });
  return result;
};


const deletePaymentById = async (id: string) => {
  const result = await prisma.payment.delete({
    where: { id },
  });
  return result;
};


const getUserById = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id },
    include: {
      reviews: true,
    },
  });
  return result;
};

export const updateStatus = async (
  id: string,
  payload: { userStatus: Status }
) => {
  const result = await prisma.user.update({
    where: { id },
    data: {
      userStatus: payload.userStatus,
    },
  });

  return result;
};

const deleteUserById = async (id: string) => {
  await prisma.payment.deleteMany({
    where: { userId: id },
  });
  await prisma.review.deleteMany({
    where: { reviewerId: id },
  });
  const result = await prisma.user.delete({
    where: { id },
  });

  return result;
};

const softDelete = async (id: string, status: Status) => {
  const result = await prisma.user.update({
    where: { id },
    data: {
      userStatus: status,
    },
  });

  return result;
};

const getAllTravelPlan = async () => {
  const result = await prisma.travelPlan.findMany({
    include: {
      host: true,
    },
  });
  return result;
};

const getPlanById = async (id: string) => {
  return prisma.travelPlan.findUnique({
    where: { id },
  });
};

const deletePlanById = async (id: string) => {
  await prisma.review.deleteMany({
    where: {
      travelPlanId: id,
    },
  });

  return prisma.travelPlan.delete({
    where: { id },
  });
};

const deleteReviewById = async (id: string) => {
  await prisma.review.delete({
    where: {
      id: id,
    },
  });
};

const getAllReview = async () => {
  const result = await prisma.review.findMany({
    include: {
      reviewer: true,
    },
  });
  return result;
};

export const getAdminStats = async () => {
  const totalUsers = await prisma.user.count();
  const totalTravelPlans = await prisma.travelPlan.count();
  const totalReviews = await prisma.review.count();

  const last7Days = Array.from({ length: 7 })
    .map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      return date;
    })
    .reverse();

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const dailyUsers = await Promise.all(
    last7Days.map(async (date) => {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      const count = await prisma.user.count({
        where: {
          createdAt: {
            gte: date,
            lt: nextDate,
          },
        },
      });
      return { date: formatDate(date), count };
    })
  );

  const dailyTravelPlans = await Promise.all(
    last7Days.map(async (date) => {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      const count = await prisma.travelPlan.count({
        where: {
          createdAt: {
            gte: date,
            lt: nextDate,
          },
        },
      });
      return { date: formatDate(date), count };
    })
  );

  const dailyReviews = await Promise.all(
    last7Days.map(async (date) => {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      const count = await prisma.review.count({
        where: {
          createdAt: {
            gte: date,
            lt: nextDate,
          },
        },
      });
      return { date: formatDate(date), count };
    })
  );

  return {
    success: true,
    data: {
      total: {
        users: totalUsers,
        travelPlans: totalTravelPlans,
        reviews: totalReviews,
      },
      daily: {
        users: dailyUsers,
        travelPlans: dailyTravelPlans,
        reviews: dailyReviews,
      },
    },
  };
};

export const getVerifiedUser = async () => {
  const result = await prisma.user.findMany({
    where: {
      verified: true,
    },
  });
  return result;
};

export const adminService = {
  deleteReviewById,
  getAllUser,
  getAllTravelPlan,
  getAllReview,
  getUserById,
  deleteUserById,
  softDelete,
  deletePlanById,
  getPlanById,
  updateStatus,
  getAdminStats,
  getVerifiedUser,
  getAllPayment,
  getPaymentById,
  deletePaymentById
};
