import { Injectable, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [
    new Product(
      "Smartfon SAMSUNG Galaxy A52",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/26/2681033/Smartfon-SAMSUNG-Galaxy-A52-6-128GB-SM-A526-Niebieski-front-tyl.jpg",
      [1500,2000],
      'phone'
    ),
    new Product(
        "Smartfon SAMSUNG Galaxy A33",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
        "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/36/3615833/Smartfon-SAMSUNG-Galaxy-A33-6-128GB-5G-6.4-90Hz-Czarny-SM-A336BZKGEUE-tyl-front.jpg",
        [2500,3000],
        'phone'
      ),
  ];
  getProducts(){
    return this.products;
  }
  getProduct(index:number){
    return this.products[index];
  }
}
