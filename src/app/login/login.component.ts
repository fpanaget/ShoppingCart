import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Customer } from '../domain/customer';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  customer: Customer;

  ngOnInit() {
    this.customer = new Customer();
    this.customer.client_id=environment.clientId;
    this.customer.scope="admin_scope";
    this.customer.grant_type="password";
  }

  onSubmit(){

    this.authenticationService.login(this.customer).subscribe();
  }

}
