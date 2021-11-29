import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Student } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Prof {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field()
  @Column({ nullable: true })
  name: string

  @Field()
  @Column({ nullable: true })
  lastname: string

  @OneToMany(() => Student, student => student.prof)
  @Field(type => [Student], { nullable: true })
  students: Student[]
}
