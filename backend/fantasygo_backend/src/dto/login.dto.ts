import { IsNotEmpty, Length, Matches, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInputDto {
  @Field()
  @IsNotEmpty()
  @Length(10, 10, { message: "Phone number must be exactly 10 digits long" })
  @Matches(/^0\d{9}$/, {
    message: "Phone number must start with 0 and contain only numbers",
  })
  phoneNumber!: string;

  @Field()
  @IsNotEmpty()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  password: string;
}
