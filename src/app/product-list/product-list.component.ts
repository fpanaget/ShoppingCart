import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = Products[];
  selectedProduct : Product;
  constructor(private productService : ProductService) { }


  ngOnInit() {
    this.getProducts();
    this.selectedProduct = this.products[0];
  }

getProducts() : void{
  this.products = this.productsService.gerProducts().subscribe(products =>this.products = products);
}

  onSelect( product : Product):void{
    this.selectedProduct = product;
  }

}
