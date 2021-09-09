/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/domain/account/User';
import Entity from 'src/domain/common/Entity';
import { UserConfiguration } from './common/configuration/UserConfiguration';
import { exec } from 'child_process';

@Injectable()
export class AppDbContext{
    private modelMappings = new WeakMap();
    public Users : any;

    public constructor(private readonly sequalize : Sequelize){
        this.Users = UserConfiguration(sequalize);
        this.initializeModels();
        this.migrate();
    }
    private initializeModels(){
        this.modelMappings.set(User, this.Users);
    }
    public getModel(entity : Entity | any){
        return this.modelMappings.get(entity.prototype ? entity : entity.constructor);
    }
    async migrate() {
        await new Promise<void>((resolve, reject) => {
            const migrate = exec(
              'sequelize db:migrate',
              {env: process.env},
              err => (err ? reject(err): resolve())
            );
          
            // Forward stdout+stderr to this process
            migrate.stdout.pipe(process.stdout);
            migrate.stderr.pipe(process.stderr);
          });
    }
    async ensureDeleted(){
        this.Users.destroy({where: {}});
    }
      
}
