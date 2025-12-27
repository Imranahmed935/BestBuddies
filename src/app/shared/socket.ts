
import { Server } from "socket.io";
import { jwtHelper } from "../helpers/jwtHelper";


let io: Server;

export const initSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: "https://best-buddies-client.vercel.app",
      credentials: true,
    },
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth?.token; 
    if (!token) return next(new Error("Unauthorized"));
    try {
      const payload = jwtHelper.verifyToken(token, process.env.JWT_SECRET!)
      socket.data.userId = payload.id;  
      next();
    } catch (err) {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.id);
    const userId = socket.data.userId;
    console.log(userId)
    if (userId) {
      socket.join(userId);
      console.log(`User ${userId} joined their personal room`);
    }

    socket.on("disconnect", () => {
      console.log("🔴 User disconnected:", socket.id);
    });
  });
};

export const getIO = () => io;

