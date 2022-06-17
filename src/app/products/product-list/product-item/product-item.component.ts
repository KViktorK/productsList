import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  @Input() index:number
  basicImg= "../../../../assets/sprite/symbol-defs.svg#icon-camera"
  isExpanded:boolean;

  changeExpanded(e:Event){
    e.stopPropagation()
    this.isExpanded=!this.isExpanded
  }

  sliceString(string:string){
  const length = 120;
  return string.substring(0, length) + '...';
  
  }
  constructor() { }

  ngOnInit() {
  
  }

}
