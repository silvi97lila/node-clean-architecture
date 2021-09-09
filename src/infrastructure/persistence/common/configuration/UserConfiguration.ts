/* eslint-disable prettier/prettier */
"use strict";
import {DataTypes} from "sequelize";

export const UserConfiguration =  (instance : any) => {
    return instance.define("users", {
        id:{ type: DataTypes.STRING(128), primaryKey: true },
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        status: {type: DataTypes.INTEGER, allowNull: false},
        maxAttempts: {type: DataTypes.INTEGER, allowNull: false},
    })
}