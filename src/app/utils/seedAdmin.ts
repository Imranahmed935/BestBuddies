import { Role } from "../../../prisma/generated/prisma";
import config from "../../config";
import { prisma } from "../shared/prisma";
import bcryptjs from "bcryptjs";

const seedAdmin = async () => {
  const isAdminExist = await prisma.user.findUnique({
    where: { email: config.admin.super_admin_email },
  });

  if (isAdminExist) {
    console.log("Super Admin already exists");
    return; 
  }

  const hashPassword = await bcryptjs.hash(
    config.admin.super_admin_pass as string,
    10
  );

  const payload = {
    fullName: "Md.Imran Ahmed", 
    email: config.admin.super_admin_email as string,
    role: Role.ADMIN,
    password: hashPassword,
    verified: true,
  };

  await prisma.user.create({
    data: payload,
  });

  console.log("✅ Super Admin created successfully");
};

export default seedAdmin;
