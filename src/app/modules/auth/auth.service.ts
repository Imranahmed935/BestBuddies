import ApiError from "../../errors/ApiError";
import { jwtHelper } from "../../helpers/jwtHelper";
import { prisma } from "../../shared/prisma";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

const login = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: payload.email,
    },
  });

  const checkPass = await bcrypt.compare(payload.password, user.password);
  if (!checkPass) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Password is incorrect!");
  }

  const accessToken = jwtHelper.generateToken(
    { email: user.email, role: user.role, id: user.id },
    config.jwt.jwt_secret as string,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelper.generateToken(
    { email: user.email, role: user.role },
    config.jwt.refresh_token_secret as string,
    config.jwt.refresh_token_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getMe = async (cookies: any) => {
  const accessToken = cookies.accessToken;

  if (!accessToken) {
    throw new ApiError(401, "Access Token not found");
  }

  const decodedData = jwtHelper.verifyToken(
    accessToken,
    config.jwt.jwt_secret as Secret
  );

  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: decodedData.email,
    },
  });

  return userData;
};

 const changePassword = async (id: string, payload: { oldPassword: string; newPassword: string }) => {
  const { oldPassword, newPassword } = payload;
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new Error("User not found");
  }

  const isPassMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isPassMatch) {
    throw new Error("Old password is incorrect");
  }

  const hashedPass = await bcrypt.hash(newPassword, 10);

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPass },
  });

  return updatedUser;
};

export const authService = {
  login,
  getMe,
  changePassword
};
