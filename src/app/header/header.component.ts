import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
    ) { }
  
  isAdmin: Observable<boolean>;
  
  toggle(event){
    this._toggle.setToggle(event.target.checked)
    this._localStorage.set('isAdmin',event.target.checked)
  }

  ngOnInit() {
    this.isAdmin = this._localStorage.get('isAdmin')
  }

}
