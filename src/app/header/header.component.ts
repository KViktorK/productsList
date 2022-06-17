import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../products/product.service';
import { LocalStorageService } from '../shared/localStorage';
import { ToggleService } from '../shared/switchService';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private _localStorage:LocalStorageService,
    private _toggle:ToggleService,
    private _ptoductService:ProductService,
    ) { }
  
  isAdmin: Observable<boolean>;
  searchValue: string;
  toggle(event){
    this._toggle.setToggle(event.target.checked)
    this._localStorage.set('isAdmin',event.target.checked)
  }
  search(e:Event){
    this.searchValue = (e.target as HTMLInputElement).value
    this._ptoductService.search.next(this.searchValue)
  }
  ngOnInit() {
    this.isAdmin = this._localStorage.get('isAdmin')
  }

}
