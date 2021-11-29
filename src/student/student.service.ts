import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>) { }

  async create(createStudentInput: CreateStudentInput) {
    return this.studentRepository.save(createStudentInput)
  }

  async findAll(cndt?: any) {
    return await this.studentRepository.find({ where: cndt })
  }

  async findOne(id: string) {
    let student = this.studentRepository.findOne({ where: { _id: id } })
    if (student) {
      return student
    }

    return new NotFoundException({ message: "student not found " })
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
