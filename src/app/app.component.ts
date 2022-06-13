import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public productList: any;
  constructor() {}
  ngOnInit(): void {
  
  }
  title = "productsList";
}
