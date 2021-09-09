/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { IDataWriter } from "src/application/common/IDataWriter";
import Entity from "src/domain/common/Entity";
import { AppDbContext } from "../AppDbContext";

@Injectable()
export class SDataWriter implements IDataWriter{
    private readonly _addEntities = new Set<Entity>();
    private readonly _removeEntities = new Set<Entity>();
    private readonly _updateEntities = new Set<Entity>();

    public constructor(private readonly appDbContext : AppDbContext, private readonly sequielize : Sequelize){}
    
    add(entity: Entity) {
        this._addEntities.add(entity);
        return this;
    }
    remove(entity: Entity) {
        this._removeEntities.add(entity);
        return this;
    }
    update(entity: Entity) {
        this._updateEntities.add(entity);
        return this;
    }
    async saveAsync() {
        let transaction :any;
        try {
            transaction = await this.sequielize.transaction();
            for(const updateItem of Array.from(this._updateEntities.values())){
                const x = this.appDbContext.getModel(updateItem);
                await x.update(updateItem, {where: {id : updateItem.id}}, {transaction});
            }
            for(const addItem of Array.from(this._addEntities.values())){            
                const x = this.appDbContext.getModel(addItem);
                await x.create(addItem, {transaction});
            }
            for(const deleteItem of Array.from(this._removeEntities.values())){
                const x = this.appDbContext.getModel(deleteItem);
                await x.destroy({where: {id : deleteItem.id}}, {transaction});
            }
            await transaction.commit();

            this._addEntities.clear();
            this._updateEntities.clear();
            this._removeEntities.clear();
        } catch (e) {
            console.log(e);
            await transaction.rollback();
        }
    }
}