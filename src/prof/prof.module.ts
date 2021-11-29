import { Module } from '@nestjs/common';
import { ProfService } from './prof.service';
import { ProfResolver } from './prof.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prof } from './entities/prof.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forFeature([Prof])
  ],
  providers: [
    ProfResolver,
    ProfService
  ]
})
export class ProfModule { }
