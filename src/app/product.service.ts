import { Injectable } from '@angular/core';
import { Product } from './domain/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

const httpOptions ={
  headers : new HttpHeaders ({'Content-type':'application/json'})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  private productsUrl = environment.apiBaseUrl+'/api/products';
  //A Subject multicasts messages to subscribed Observers
  private needsRefreshSubject = new Subject<boolean>();

  listNeedsRefresh = this.needsRefreshSubject.asObservable();


  triggerRefresh(needsRefresh) {
    //this means that the Subject will multicast
    //the value needsRefresh to all subscribers
    this.needsRefreshSubject.next(needsRefresh);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap (products => {
        console.log("get api/products");
        console.log(products);
      }),
      catchError(this.handleError('getproducts',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.productsUrl, product,httpOptions).pipe(
      tap((product:Product)=>console.log('Created product with id =${product.id}')),
      catchError(this.handleError<Product>('createProduct'))
    );
  }

  deleteProduct(product:Product):Observable<Product>{
    return this.http.delete(this.productsUrl+"/"+product.id,httpOptions).pipe(
      tap((product:Product)=>console.log('Deleted product with id =${product.id}')),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

}
