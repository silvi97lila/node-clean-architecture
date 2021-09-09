/* eslint-disable prettier/prettier */
import Entity from "../common/Entity";

export class User extends Entity {
  
  public constructor(
    public firstName : string,
    public lastName : string,
    public email : string,
    public password : string,
    public status : UserStatus,
    public maxAttempts : number
    ) {
    super();
  }

  incrementAttempts() : void{
    const maxAttempts = this.maxAttempts + 1;
    this.status =  maxAttempts >= 20 ? UserStatus.Blocked : this.status;
  }
}

export enum UserStatus {
  NotVerified,
  Active,
  Blocked,
  Deleted,
}
