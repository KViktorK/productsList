import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";

const appRoutes: Routes = [
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
