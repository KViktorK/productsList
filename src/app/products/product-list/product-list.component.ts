import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LocalStorageService } from "src/app/shared/localStorage";
import { ToggleService } from "src/app/shared/switchService";

import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  isAdmin: boolean;
  products: Product[];
  
  filter;
  
  filteredProduct:Product[] = []
  
  subscription: Subscription;
  searchKey: string = "";
  constructor(
    private _productService: ProductService,
    private _localStorage: LocalStorageService,
    private _toggleService: ToggleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isAdmin = this._localStorage.get("isAdmin");
    this.subscription = this._toggleService.isAdmin.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });

    this.subscription = this._productService.productsChanged.subscribe(
      (product: Product[]) => {
        this.products = product;
      }
    );

    this.products  = this._productService.getProducts();
    
    this.filter = this._productService.filter

    this._productService.search.subscribe((val:string)=>{
      this.searchKey = val
    })
  }
  filterChange(){
    this.products  = this._productService.getProducts();
  }
  onNewProduct() {
    this._router.navigate(["products/new"]);
    let modal_t = document.getElementById("modal_product");
    if (modal_t) {
      modal_t.classList.remove("hidden");
      modal_t.classList.add("show");
    }
  }
}
