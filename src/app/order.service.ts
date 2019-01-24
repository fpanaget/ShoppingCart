import { Injectable } from '@angular/core';
import { Order } from './domain/order';
import { Product } from './domain/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

interface OrderProduct{
  id: string,
  orderId: string,
  productId: string
}


@Injectable()
export class OrderService {

  private ordersUrl = environment.apiBaseUrl+'/api/orders';

  constructor(private http: HttpClient) { }

  createOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.ordersUrl, order,httpOptions).pipe(
      tap((order:Order)=>console.log('Created order with id ='+order.id)),
      catchError(this.handleError<Order>('createOrder'))
    );
  }
  //API is: orders/id/products/rel/fk
  addProductToOrder(order:Order, product:Product):Observable<OrderProduct>{
    return this.http.put<OrderProduct>(this.ordersUrl+'/'+order.id+'/products/rel/'+product.id,httpOptions).pipe(
      tap((orderProduct:OrderProduct)=>console.log('Added product with id: '+orderProduct.productId+' to order with id ='+orderProduct.orderId)),
      catchError(this.handleError<OrderProduct>('add product to order'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
  }

}
