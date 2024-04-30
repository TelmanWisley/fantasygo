import { HealthResolver } from "./health.resolver";
import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";

// Mock the Service decorator to avoid actual dependency injection
jest.mock("typedi", () => ({
  Service: jest.fn(() => (target) => target),
}));

jest.mock("type-graphql", () => ({
  InputType: jest.fn(),
  Field: jest.fn(),
  Resolver: jest.fn(() => (target) => target),
  Arg: jest.fn(() => (_target, _propertyKey) => {}),
  Query: jest.fn(() => (_target, _propertyKey, descriptor) => descriptor),
}));

@Service()
@Resolver(() => String)
class TestHealthResolver extends HealthResolver {
  @Query(() => String)
  public healthQuery(): String {
    return super.healthQuery();
  }
}

describe("HealthResolver", () => {
  let resolver: TestHealthResolver;

  beforeEach(() => {
    resolver = new TestHealthResolver();
  });

  it('should return "Hello World"', async () => {
    const result = await resolver.healthQuery();
    expect(result).toBe("Hello World");
  });
});
