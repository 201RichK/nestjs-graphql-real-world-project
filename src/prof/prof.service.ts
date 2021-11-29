import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentService } from 'src/student/student.service';
import { Repository } from 'typeorm';
import { CreateProfInput } from './dto/create-prof.input';
import { UpdateProfInput } from './dto/update-prof.input';
import { Prof } from './entities/prof.entity';

@Injectable()
export class ProfService {

  constructor(
    @InjectRepository(Prof)
    private readonly profRepository: Repository<Prof>
  ) { }

  async create(createProfInput: CreateProfInput) {
    return await this.profRepository.save(createProfInput)
  }

  async findAll() {
    return await this.profRepository.find({ relations: ["students"] })
  }

  findOne(id: number) {
    return `This action returns a #${id} prof`;
  }

  async update(updateProfInput: UpdateProfInput) {
    return await this.profRepository.save(updateProfInput)
  }

  remove(id: number) {
    return `This action removes a #${id} prof`;
  }
}
