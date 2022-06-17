import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog/dialogService';
import { LocalStorageService } from 'src/app/shared/localStorage';
import { ToggleService } from 'src/app/shared/switchService';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  id:number;
  isAdmin:boolean;
  subscription: Subscription;

  constructor(
    public dialogService:DialogService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toggleService:ToggleService,
    private _localStorage:LocalStorageService) { }

  ngOnInit() {
    this._route.params
    .subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.product = this._productService.getProduct(this.id);
      }
    )
    this.isAdmin = this._localStorage.get('isAdmin')
  }
 onEditProduct(){
  this._router.navigate(['edit'],{relativeTo:this._route})
 }
 onDelete(){
  this._productService.deleteProduct(this.id);
  this._router.navigate(['/products'])
 }
  onCancel() {
    let modal_item  = document.getElementById('modal_product-item')
    modal_item.classList.remove('show')
    modal_item.classList.add('hidden');
    this._router.navigate(['../'], {relativeTo: this._route});
  }
  onDialog(){
    this.dialogService.showDialog = !this.dialogService.showDialog
  }
}
