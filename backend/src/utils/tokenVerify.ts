import jwt from "jsonwebtoken";
import { Context, Token } from "../interfaces";
import { env } from "../env";
import { ApolloError } from "apollo-server-express";
import httpStatus from "http-status";

export const verifyToken = async (ctx: Context): Promise<Token> => {
  try {
    const token = ctx.req.header("Authorization").split(" ")[1];
    const { secretKey } = env;
    const data: any = jwt.verify(token, secretKey);
    return { phoneNumber: data.phoneNumber, password: data.password };
  } catch(err) {
    throw new ApolloError("Token is invalid", "Unauthorized", {
      errorCode: httpStatus.UNAUTHORIZED,
    });
  }
};
