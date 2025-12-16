import { Request } from "express";
import { prisma } from "../../shared/prisma";
import bcrypt from "bcryptjs";

const createUser = async (req: Request) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      fullName:fullName,
      email: email.toLowerCase(),
      password: hashedPassword,
    },
  });
  return user;
};

export const userService = {
  createUser,
};
