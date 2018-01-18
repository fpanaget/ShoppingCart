import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent} from './product-list/product-list.component';
import { OrderComponent} from './order/order.component';

import { AppComponent } from './app.component';

const routes : Routes =[
//  {path : 'AppComponent', component: AppComponent},
  {path : 'products', component: ProductListComponent},
  {path : 'order', component: OrderComponent}
//  {path : '', redirectTo : '/AppComponent', pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
