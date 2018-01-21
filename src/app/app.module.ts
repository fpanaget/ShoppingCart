import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './/app-routing.module';

import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { AuthenticationService } from './authentication.service';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';
import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductListComponent,
    ProductDeleteComponent,
    ProductModifyComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    OrderService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptorService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptorService,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
