import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import * as fs from "fs";
import { join } from "path";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            type: <any>process.env.TYPE,
            host: process.env.HOST,
            port: +process.env.DB_PORT,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            entities: ["dist/**/**/*.entity{.ts,.js}", "dist/res/**/entities/*.entity{.ts,.js}"],
            synchronize: process.env.APP_ENV === 'dev',
            ssl: process.env.APP_ENV === 'dev' ? false : process.env.APP_ENV === "docker" ? false : {
                rejectUnauthorized: true,
                ca: fs.readFileSync("ca-certificate.crt", 'utf8').toString(),
            },
            timeout: 1000,
            migrationsTableName: 'migrations',
            // migrations: ["dist/config/typeorm/migration/*.js", join(__dirname, "migration/*.ts")],
            migrationsRun: true,
            logging: ['warn', 'error'],
            logger: process.env.APP_ENV === 'prod' ? 'file' : 'debug',
            cli: {
                migrationsDir: `${join(__dirname)}/migrations`,
            }
        }
    }
}
