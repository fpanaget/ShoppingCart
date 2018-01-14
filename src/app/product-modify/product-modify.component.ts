import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {

  @Input() childProduct:Product;

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.productService.modifyProduct(this.childProduct).subscribe(data=>
      this.productService.triggerRefresh(true)
    );
  }

}
