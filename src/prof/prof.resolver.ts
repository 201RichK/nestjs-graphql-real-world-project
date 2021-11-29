import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProfService } from './prof.service';
import { Prof } from './entities/prof.entity';
import { CreateProfInput } from './dto/create-prof.input';
import { UpdateProfInput } from './dto/update-prof.input';
import { IsUUID, isUUID } from 'class-validator';
import { NotFoundException } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Resolver(() => Prof)
export class ProfResolver {
  constructor(
    private readonly profService: ProfService,
    private readonly studentService: StudentService

  ) { }

  @Mutation(() => Prof)
  createProf(@Args('createProfInput') createProfInput: CreateProfInput) {
    return this.profService.create(createProfInput);
  }

  @Query(() => [Prof], { name: 'profs' })
  findAll() {
    return this.profService.findAll();
  }

  @Query(() => Prof, { name: 'prof' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profService.findOne(id);
  }

  @Mutation(() => Prof)
  updateProf(@Args('updateProfInput') updateProfInput: UpdateProfInput) {
    if (isUUID(updateProfInput._id, "4")) {
      return this.profService.update(updateProfInput)
    }
    return new NotFoundException({ message: "Prof not found" })
  }

  @Mutation(() => Prof)
  removeProf(@Args('id', { type: () => Int }) id: number) {
    return this.profService.remove(id);
  }

  // @ResolveField()
  // async students(@Parent() prof: Prof) {
  //   console.log("hkj");

  //   const { _id } = prof;
  //   return this.studentService.findAll({ prof: _id });
  // }
}
