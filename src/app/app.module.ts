import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './/app-routing.module';

import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    UserComponent,
    ProductListComponent,
    ProductDeleteComponent,
    ProductModifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ProductService, OrderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
