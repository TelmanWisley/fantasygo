import { LoginResolver } from "./login.resolver";
import { Arg, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { validate } from "class-validator";
import { generateToken } from "../utils";
import { ApolloError } from "apollo-server-express";
import { LoginInputDto } from "../dto";

// Mock the Service decorator to avoid actual dependency injection
jest.mock("typedi", () => ({
  Service: jest.fn(() => (target) => target),
}));

// Mock the validate function from class-validator
jest.mock("class-validator", () => ({
  validate: jest.fn(),
  IsNotEmpty: jest.fn(),
  Length: jest.fn(),
  Matches: jest.fn(),
  MinLength: jest.fn(),
}));

jest.mock("type-graphql", () => ({
  InputType: jest.fn(),
  Field: jest.fn(),
  Resolver: jest.fn(() => (target) => target),
  Mutation: jest.fn(() => (_target, _propertyKey, descriptor) => descriptor),
  Arg: jest.fn(() => (_target, _propertyKey) => {}),
  Query: jest.fn(() => (_target, _propertyKey, descriptor) => descriptor),
  Ctx: jest.fn(() => (_target, _propertyKey) => {}),
}));
// Mock the generateToken function
jest.mock("../utils", () => ({
  generateToken: jest.fn(),
}));

@Service()
@Resolver(() => String)
class TestLoginResolver extends LoginResolver {
  @Mutation(() => String)
  public async loginMutation(
    @Arg("data") inputData: LoginInputDto
  ): Promise<string> {
    return super.loginMutation(inputData);
  }
}

describe("LoginResolver", () => {
  let resolver: TestLoginResolver;

  beforeEach(() => {
    resolver = new TestLoginResolver();
  });

  it("should throw an error if validation fails", async () => {
    (validate as jest.Mock).mockResolvedValue([
      { constraints: { isNotEmpty: "Field is empty" } },
    ]);

    await expect(
      resolver.loginMutation({ phoneNumber: "", password: "" })
    ).rejects.toThrow(ApolloError);
  });

  it("should return a token if validation passes", async () => {
    (validate as jest.Mock).mockResolvedValue([]);
    (generateToken as jest.Mock).mockReturnValue("mockToken");

    const result = await resolver.loginMutation({
      phoneNumber: "test",
      password: "test",
    });
    expect(result).toBe("Bearer mockToken");
  });
});
