import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Product;

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.product = new Product(0,'','',0);
  }

  onSubmit(){
    this.productService.createProduct(this.product).subscribe(data=>
      this.productService.triggerRefresh(true)
    );
  }

}
