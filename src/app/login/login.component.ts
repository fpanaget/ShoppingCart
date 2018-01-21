import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Customer } from '../domain/customer';

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
  }

  onSubmit(){

    this.authenticationService.login(this.customer).subscribe();
  }

}
