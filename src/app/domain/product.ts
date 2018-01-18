export class Product{
  constructor(
  name: string,
  description: string,
  price: number,
  //to make the id optional, it must be the last parameter of the list
  id?: string
){
this.id = id;
this.name = name;
this.description= description;
this.price = price;

}



id:string;
name:string;
description: string;
price:number;



}
