import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class CreateProfInput {
  @Field()
  name: string

  @Field()
  lastname: string
}
