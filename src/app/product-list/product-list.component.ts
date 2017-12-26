import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import {PRODUCTS} from '../domain/mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct : Product=PRODUCTS[0];
  constructor() { }

  ngOnInit() {


  }
  onSelect( product : Product):void{
    this.selectedProduct = product;
  }

}
