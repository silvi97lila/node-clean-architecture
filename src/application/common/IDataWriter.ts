/* eslint-disable prettier/prettier */

import Entity from "src/domain/common/Entity";

export interface IDataWriter{
    add(entity : Entity) : any;
    remove(entity: Entity) : any;
    update(entity: Entity): any;
    saveAsync() : any;
}