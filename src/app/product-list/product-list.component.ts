import { Component, OnInit } from "@angular/core";
import { Product } from "../domain/product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
    this.productService.listNeedsRefresh.subscribe(needsRefresh => {
      if (needsRefresh)
        (async () => {
          console.log(" delay");

          await delay(1000);
          this.getProducts();
        })();
    });
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.selectedProduct = products[0];
    });
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
