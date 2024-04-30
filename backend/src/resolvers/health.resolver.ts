import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";

@Service()
@Resolver(() => String)
export class HealthResolver {
  @Query(() => String)
  public healthQuery(): String {
    return "Hello World";
  }
}