import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  subscription: Subscription;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.subscription = this.productService.productsChanged.subscribe(
      (product: Product[]) => {
        this.products = product;
      }
    );
    this.products = this.productService.getProducts();
    console.log(this.products)
  }
}
