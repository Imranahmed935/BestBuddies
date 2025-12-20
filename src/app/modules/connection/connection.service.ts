import { prisma } from "../../shared/prisma";


const sendConnection = async (senderId: string, receiverId: string) => {
  if (senderId === receiverId) {
    throw new Error("You cannot connect with yourself");
  }

  const exists = await prisma.connection.findFirst({
    where: {
      OR: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
  });

  if (exists) {
    throw new Error("Connection already exists or pending");
  }

  return prisma.connection.create({
    data: {
      senderId,
      receiverId,
    },
  });
};

const respondConnection = async (
  connectionId: string,
  userId: string,
  action: "ACCEPT" | "REJECT"
) => {
  const connection = await prisma.connection.findUnique({
    where: { id: connectionId },
  });

  if (!connection || connection.receiverId !== userId) {
    throw new Error("Unauthorized action");
  }

  return prisma.connection.update({
    where: { id: connectionId },
    data: {
      status: action === "ACCEPT" ? "ACCEPTED" : "REJECTED",
    },
  });
};

const myFriends = async (userId: string) => {
  const connections = await prisma.connection.findMany({
    where: {
      status: "ACCEPTED",
      OR: [{ senderId: userId }, { receiverId: userId }],
    },
    include: {
      sender: true,
      receiver: true,
    },
  });

  return connections.map(conn =>
    conn.senderId === userId ? conn.receiver : conn.sender
  );
};

const pendingRequests = async (userId: string) => {
  return prisma.connection.findMany({
    where: {
      receiverId: userId,
      status: "PENDING",
    },
    include: {
      sender: true,
    },
  });
};

export const ConnectionService = {
  sendConnection,
  respondConnection,
  myFriends,
  pendingRequests,
};
