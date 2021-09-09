/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';

export default class Entity{
    public id : string;

    constructor(){
        this.id = uuidv4();
    }
}