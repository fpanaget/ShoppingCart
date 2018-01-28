import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor{

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    let access_token =  localStorage.getItem('access_token');
    if(access_token){
       console.log("Adding Authorization header: Bearer "+access_token);
       request = request.clone({
        headers:  request.headers.set('Authorization',"Bearer "+access_token)

      });

    }

    return next.handle(request);

  }

}
