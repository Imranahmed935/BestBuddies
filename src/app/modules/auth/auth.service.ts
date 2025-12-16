import ApiError from "../../errors/ApiError";
import { jwtHelper } from "../../helpers/jwtHelper";
import { prisma } from "../../shared/prisma";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import config from "../../../config";

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

export const authService = {
  login,
};
