import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService : ProductService) { }

  @Input() product:Product;

  ngOnInit() {
  }
  //delete the selected product
  onSubmit(){
    this.productService.deleteProduct(this.product).subscribe(
      data=>
        this.productService.triggerRefresh(true)
    );
  }

}
