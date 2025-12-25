import { prisma } from "../../shared/prisma";

const getNotification = async (userId: string) => {
  if (!userId) throw new Error("Receiver ID is required");
  console.log("user id",userId)
  return prisma.notification.findMany({
    where: {receiverId:userId },
    include:{
      sender:true
    },
    orderBy: { createdAt: "desc" },
  });
};

export const NotificationService = {
  getNotification,
};
