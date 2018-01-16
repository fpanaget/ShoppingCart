import {Product} from './product';
import {User} from './user';

export class Order{
  private _id:string;
  private _user:User;
  private _products:Array<Product>;

 get id(): string{
   return this._id;
 }
 set id(id: string){
   this._id=id;
 }
 get user(): User{
   return this._user;
 }
 set user(user:User){
   this._user=user;
 }
 get products(): Array<Product>{
   return this._products;
 }
  set products(products: Array<Product>){
    this._products=products;
  }
  addProduct(product:Product): Array<Product>{
    this._products.push(product);
    return this._products;
  }

}
