import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class League {
  @Field()
  firstName: String;

  @Field()
  secondName: String;

  @Field()
  displayName: String;

  @Field()
  totalPoints: number;

  @Field()
  team: String;
}
