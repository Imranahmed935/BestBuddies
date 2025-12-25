import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const generateToken = (payload: any, secret: Secret, expiresIn: string) => {
  const token = jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn,
  } as SignOptions);

  return token;
};

const verifyToken = (payload: any, secret: Secret) => {
  return jwt.verify(payload, secret) as JwtPayload;
};

export const jwtHelper = {
  generateToken,
  verifyToken,
};
