import { InputType, Int, Field, ObjectType, ID } from '@nestjs/graphql';
import { Prof } from 'src/prof/entities/prof.entity';

@InputType()
@ObjectType()
export class CreateStudentInput {
  @Field()
  name: string

  @Field()
  lastname: string

  @Field()
  matricule: string

  @Field(type => ID)
  prof: Prof;
}
