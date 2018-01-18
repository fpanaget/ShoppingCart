import { Component, OnInit } from '@angular/core';
import { Order } from '../domain/order';
import { OrderService } from '../order.service';
import { Product } from '../domain/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  private _orderService: OrderService;
  private _productService: ProductService;
  products : Product[];
  selectedProduct: Product;
  order_products: Array<Product>;

  constructor(private orderService: OrderService, productService: ProductService) {
    this._orderService = orderService;
    this._productService = productService;
  }

  ngOnInit() {
    this.getProducts();
    this.order_products = new Array<Product>();
  }

  getProducts() : void{
    this._productService.getProducts()
    .subscribe(products =>{
      this.products = products;
      this.selectedProduct = products[0];
    });
  }

  onSubmit(){
    if(!this.order) this.order = new Order();
    this._orderService.createOrder(this.order).subscribe(data =>  {
      //product has been created and we store it in local variable so it has the id
      this.order=data;
      //collect all observables in an Array
      let observables: Observable<any>[] = [];
      for (let p of this.order_products){
         observables.push(this._orderService.addProductToOrder(this.order, p));
         }
      //now subscribe to all of the Observable and wait until they all complete
      Observable.forkJoin(observables).subscribe();
    });

  }

  onSelect( product : Product):void{
    this.selectedProduct = product;
  }

  onAddProductSubmit(){
    this.order_products.push(this.selectedProduct);
  }

}
