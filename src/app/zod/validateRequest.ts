import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const validateRequest =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    schema.parse(req.body);
    next();
  };

export default validateRequest;
