import {Product} from './product';
import {User} from './user';

export class Order{
  id:number;
  _user:User;
  _products:Array<Product>;

}
