import {Product} from './product';
import {User} from './user';

export class Order{
  private _id:string;

 get id(): string{
   return this._id;
 }
 set id(id: string){
   this._id=id;
 }

}
