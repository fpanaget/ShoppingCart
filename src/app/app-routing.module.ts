import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent} from './product-list/product-list.component';
import { OrderComponent} from './order/order.component';
import { LoginComponent} from './login/login.component';
import { LogoutComponent} from './logout/logout.component';
import { RegisterComponent} from './register/register.component';




import { AppComponent } from './app.component';

const routes : Routes =[
//  {path : 'AppComponent', component: AppComponent},
  {path : 'products', component: ProductListComponent},
  {path : 'order', component: OrderComponent},
  {path : 'login', component: LoginComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'register', component: RegisterComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
