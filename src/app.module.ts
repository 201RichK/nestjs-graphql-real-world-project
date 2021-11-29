import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './config';
import { ProfModule } from './prof/prof.module';
import { StudentModule } from './student/student.module';

if (process.env.APP_ENV === undefined) {
  process.env.APP_ENV = "dev"
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: "api/v1/query",
      debug: false,
      playground: true,
      autoSchemaFile: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
    ConfigModule.forRoot({
      envFilePath: `env/.${process.env.APP_ENV}.env`,
      isGlobal: true,
    }),
    ProfModule,
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
