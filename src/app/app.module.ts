import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/product.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LocalStorageService } from './shared/localStorage';
import { CommonModule } from '@angular/common';
import { ToggleService } from './shared/switchService';
import { DropdownDirective } from './shared/dropdown.directive';
import { FilterPipe } from './shared/filte.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    ProductEditComponent,
    ModalComponent,
    ProductDetailComponent,
    DropdownDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  providers: [ProductService,LocalStorageService,ToggleService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
