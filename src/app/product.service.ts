import { Injectable } from '@angular/core';
import { Product } from './domain/Product';
import { HttpsClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions ={
  headers : new HttpsHeaders ({'Content-type':'application/json'})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  private productsUrl = 'http://localhost:4200/api/products';

  getProducts(): Observable<Product>[]{
    return this.http.get<Product>(this.productsUrl).pipe(
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

}
