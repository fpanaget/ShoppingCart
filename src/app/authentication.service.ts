import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, catchError} from 'rxjs/operators';
import { Customer} from './domain/customer';
import { environment } from '../environments/environment';

const httpOptions ={
  headers : new HttpHeaders ({'Content-type':'application/json'})
};


interface LoginOutput{
 access_token: string,
 expires_in:string,
 scope:number,
 typen_type: string
}


@Injectable()
export class AuthenticationService {

  private customerUrl= environment.apiBaseUrl+'/api/customers';

  constructor(private http: HttpClient) { }


  registerCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.customerUrl, customer,httpOptions).pipe(
      tap((customer:Customer)=>console.log('Created customer with id ='+customer.id)),
      catchError(this.handleError<Customer>('registerCustomer'))
    );

  }

  login(customer:Customer):Observable<any>{
    const httpOptions2 ={
      headers : new HttpHeaders ({'Content-type':'application/x-www-form-urlencoded'})
    };
    let body = new URLSearchParams();
    body.set('username',customer.username);
    body.set('password',customer.password);
    body.set('grant_type',customer.grant_type);
    body.set('client_id',customer.client_id);
    body.set('scope',customer.scope);


    return this.http.post<LoginOutput>(environment.authBaseUrl+"/oauth2/token", body.toString(),httpOptions2).pipe(
      map(loginOutput=>{
        //login succesful
        if(loginOutput.access_token){
          localStorage.setItem('access_token',loginOutput.access_token);

        }
        return loginOutput;
      }),
      catchError(this.handleError<Customer>('login Customer'))
    );

  }

  // logout():Observable<any>{
  //   let access_token=localStorage.getItem('access_token');
  //   const httpOptions3 ={
  //     headers : new HttpHeaders ({'Content-type':'application/x-www-form-urlencoded','x-ibm-client-id':environment.clientId})
  //   };
  //   let body = new URLSearchParams();
  //   body.set('token',access_token);
  //   body.set('token_type_hint','access_token');
  //
  //
  //   return this.http.post(environment.authBaseUrl+"/oauth2/revoke", body, httpOptions3).pipe(
  //     tap(()=>{
  //       localStorage.removeItem('access_token');
  //       console.log("succesfully logged out user");
  //     }),
  //     catchError(this.handleError('logout Customer'))
  //   );
  // }

  logout():void{
        localStorage.removeItem('access_token');
        console.log("succesfully logged out user");
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
  }

}
