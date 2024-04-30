import { GraphQLError } from "graphql";
import { Logger } from "../utils";

export const errorMiddleware = (err: GraphQLError) => {
  Logger.error(err);
  return {
    message: err.message,
    errorCode: err.extensions.errorCode,
    statusCode: err.extensions.code
  }
};
