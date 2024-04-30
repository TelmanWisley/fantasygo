import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { LoginInputDto } from "../dto";
import { Service } from "typedi";
import { validate } from "class-validator";
import httpStatus from "http-status";
import { generateToken, verifyToken } from "../utils";
import { ApolloError } from "apollo-server-express";
import { Context } from "../interfaces";

@Service()
@Resolver((_type) => String)
export class LoginResolver {
  @Mutation((_type) => String)
  public async loginMutation(
    @Arg("data") inputData: LoginInputDto
  ): Promise<string> {
    const errors = await validate(inputData);
    if (errors.length > 0) {
      throw new ApolloError(
        errors.map((e) => Object.values(e.constraints)[0]).join("&"),
        "BAD_REQUEST",
        { errorCode: httpStatus.BAD_REQUEST }
      );
    }
    const token = generateToken({ ...inputData });
    return `Bearer ${token}`;
  }
  @Query((_type) => String)
  public async getDataQuery(@Ctx() ctx: Context): Promise<string> {
    const { phoneNumber } = await verifyToken(ctx);
    return phoneNumber;
  }
}
