import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor{

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    let currentUser = localStorage.getItem('currentUser');
    let accessToken =  localStorage.getItem('accessToken');
    if(currentUser && accessToken){
       console.log("Adding Authorization header: "+accessToken);
       request = request.clone({
       // headers:  request.headers.set('Authorization',accessToken)
       setHeaders: {
        Authorization: accessToken,
        "x-ibm-client-id": 'ee832963-f350-4e06-a9e2-006fa0c262fe',
        'x-ibm-client-secret': 'gO5wG0gR8eH1vN3sM1cB8wP4oJ8jR7eL2qU1wW5jA1lH3qP5bV'
      }
      });
    }
    return next.handle(request);
  }

}

