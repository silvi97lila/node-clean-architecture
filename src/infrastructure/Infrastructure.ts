/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { AppDbContext } from "./persistence/AppDbContext";
import { SDataWriter } from "./persistence/common/SDataWriter";
import { SGenericQuery } from "./persistence/common/SGenericQuery";


@Module({
    imports:[
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'test',
          }),
    ],
    providers: [AppDbContext,SDataWriter,SGenericQuery],
    exports: [AppDbContext,SDataWriter,SGenericQuery]
})
export class Infrastructure{}