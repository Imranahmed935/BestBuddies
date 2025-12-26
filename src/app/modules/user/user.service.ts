import { Request } from "express";
import { prisma } from "../../shared/prisma";
import bcrypt from "bcryptjs";
import { fileUploader } from "../../helpers/imageUpload";

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

const getUserById = async (id:string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};


const getUserAllUser = async () => {
  const user = await prisma.user.findMany()
  return user;
};


const updateProfile = async (req: Request) => {
  const { id } = req.params;
  const payload = req.body;
  let profileImage: string | undefined;

  if (req.file) {
    const uploaded = await fileUploader.uploadCloudinary(req.file);
    profileImage = uploaded?.secure_url;
  }

  const updateData: any = {
    username: payload.username,
    fullName: payload.fullName,
    bio: payload.bio,
    age: payload.age ? Number(payload.age) : undefined,
    gender: payload.gender,
    currentLocation: payload.currentLocation,
    contactNumber: payload.contactNumber,
    travelInterests: payload.travelInterests,
    visitedCountries: payload.visitedCountries,
  };

  if (profileImage) {
    updateData.profileImage = profileImage;
  }

  const result = await prisma.user.update({
    where: { id },
    data: updateData,
  });

  return result;
};

const deleteUser = async (id:string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};


export const userService = {
  createUser,
  updateProfile,
  getUserById,
  deleteUser,
  getUserAllUser
};
