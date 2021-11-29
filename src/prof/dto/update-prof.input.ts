import { CreateProfInput } from './create-prof.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateProfInput extends PartialType(CreateProfInput) {
  @Field(type => ID)
  @IsNotEmpty()
  @IsUUID('4')
  _id: string;

  @Field()
  name: string

  @Field()
  lastname: string
}
