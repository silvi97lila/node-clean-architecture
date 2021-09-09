/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { Infrastructure } from "./infrastructure/Infrastructure";
import { Application } from "./application/Application";

@Module({imports: [Infrastructure, Application]})
export class Core{}
