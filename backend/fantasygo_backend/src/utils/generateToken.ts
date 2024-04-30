import jwt from "jsonwebtoken";
import { Token } from "../interfaces";
import { env } from "../env";

export const generateToken = (tokenContent: Token): string => {
  const { secretKey } = env;
  const token = jwt.sign({...tokenContent}, secretKey, {
    expiresIn: "1h",
  });
  return token;
};
