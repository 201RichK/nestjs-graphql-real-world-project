import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prof } from 'src/prof/entities/prof.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field()
  @Column({ nullable: true })
  name: string

  @Field()
  @Column({ nullable: true })
  lastname: string

  @Field()
  @Column({ nullable: true })
  matricule: string

  @ManyToOne(() => Prof, prof => prof.students)
  @Field(type => ID)
  prof: Prof;
}
