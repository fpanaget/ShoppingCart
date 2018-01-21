import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Customer } from '../domain/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) { }

    customer: Customer;

    ngOnInit() {
      this.customer = new Customer();
    }

    onSubmit(){

      this.authenticationService.registerCustomer(this.customer).subscribe();
    }
}
