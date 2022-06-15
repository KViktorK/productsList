import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToggleService {
  private _toggle = new Subject<boolean>();

  isAdmin = this._toggle.asObservable();

  setToggle(bol: boolean) {
    this._toggle.next(bol);
  }
}
