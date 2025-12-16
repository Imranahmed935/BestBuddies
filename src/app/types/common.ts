import { Role } from "../../../prisma/generated/prisma";

export type IJWTPayload = {
  id: string;
  email: string;
  role: Role;
};