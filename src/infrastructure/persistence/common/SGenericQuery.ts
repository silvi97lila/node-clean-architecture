/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import Entity from "src/domain/common/Entity";
import { AppDbContext } from "../AppDbContext";

@Injectable()
export class SGenericQuery{
    public constructor(private readonly appDbContext : AppDbContext){}

    async getById(entity : Entity, id : string){
        const model = this.appDbContext.getModel(entity);
        return await model.findByPk(id);
    }

    async getAll(entity : Entity | any){
        const model = this.appDbContext.getModel(entity);
        return await model.findAll();
    }
}