/* eslint-disable prettier/prettier */
import { User } from "../account/User";

export interface IAuditableEntity {
    createdBy : User;
    createdAt : Date;
    lastModifiedBy : User;
    lastModifiedAt : Date;
}