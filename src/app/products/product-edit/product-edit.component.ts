import { Component, OnInit, Type } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { IType, typeList } from "src/app/shared/typeList";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"],
})
export class ProductEditComponent implements OnInit {
  id: number;
  editMode = false;
  productForm: FormGroup;
  typeList: IType[] = [];
  submitted: boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit() {
    console.log();
    typeList.map((item: IType) => {
      this.typeList.push(item);
    });
    this._route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
    });
    this.initForm();
  }

  private initForm() {
    let productName = "";
    let productImagePath = "";
    let productDescription = "";
    let productType = "";
    let productPrices = new FormArray([]);

    if (this.editMode) {
      const product = this._productService.getProduct(this.id);
      productName = product.name;
      productImagePath = product.imagePath;
      productDescription = product.description;
      console.log(product.type, "TYPE");
      productType = product.type;
      if (product["prices"]) {
        for (let price of product.prices) {
          productPrices.push(
            new FormGroup({
              value: new FormControl(price.value, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
        console.log(productPrices.value);
      }
    }
    this.productForm = new FormGroup({
      name: new FormControl(productName, Validators.required),
      imagePath: new FormControl(productImagePath),
      description: new FormControl(productDescription, Validators.required),
      type: new FormControl(productType, Validators.required),
      prices: productPrices,
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.productForm.valid) {
      if (this.editMode) {
        this._productService.updateProduct(this.id, this.productForm.value);
      } else {
        this._productService.addProduct(this.productForm.value);
      }
      this.onCancel();
    } else {
      this.validateAllFormFields(this.productForm);
    }
  }

  isFieldValid(field: string) {
    return (
      (!this.productForm.get(field).valid &&
        this.productForm.get(field).touched) ||
      (this.productForm.get(field).untouched && this.submitted)
    );
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onCancel() {
    let modal_item = document.getElementById("modal_product");

    modal_item.classList.remove("show");
    modal_item.classList.add("hidden");
    this._router.navigate(["../"], { relativeTo: this._route });
  }
  onAddPrice() {
    (<FormArray>this.productForm.get("prices")).push(
      new FormGroup({
        value: new FormControl(null),
      })
    );
  }
  onDeletePrice(index: number) {
    (<FormArray>this.productForm.get("prices")).removeAt(index);
  }
}
