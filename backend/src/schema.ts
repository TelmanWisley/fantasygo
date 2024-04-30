import { ContainerType, buildSchema } from "type-graphql";
import { HealthResolver, LeagueResolver, LoginResolver } from "./resolvers";

export const createSchema = (Container: ContainerType) => {
  return buildSchema({
    container: Container,
    resolvers: [LoginResolver, LeagueResolver, HealthResolver],
  });
};
