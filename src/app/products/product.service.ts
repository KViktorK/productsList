import { Injectable} from "@angular/core";
import { BehaviorSubject, Subject  } from "rxjs";
import { Price, Product } from "./product.model";
interface IFilter{
  monitor:boolean
  computer:boolean
  phone:boolean
}
@Injectable()
export class ProductService {
  public filter:IFilter = {
    monitor:true, 
    computer:true, 
    phone:true
  }

  public productsChanged = new Subject<Product[]>();
  
  public search = new BehaviorSubject<string>("");
  
  
  public products: Product[] = [
    new Product( 
      "Smartfon SAMSUNG Galaxy A52",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/26/2681033/Smartfon-SAMSUNG-Galaxy-A52-6-128GB-SM-A526-Niebieski-front-tyl.jpg",
      [new Price(1500),new Price(2000)],
      "phone"
    ),
    new Product(
      "Smartfon SAMSUNG Galaxy A33",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/36/3615833/Smartfon-SAMSUNG-Galaxy-A33-6-128GB-5G-6.4-90Hz-Czarny-SM-A336BZKGEUE-tyl-front.jpg",
      [new Price(2500), 
        new Price(3000)],
      "phone"
    ),
    new Product(
      "Smartfon APPLE iPhone 12 mini",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/26/2607237/Smartfon-APPLE-iPhone_12-mini-5G-128GB-Niebieski-front.jpg",
      [new Price(4000), new Price(4500)],
      "phone"
    ),
    new Product(
      "Komputer MAD DOG",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/33/3317090/Komputer-MAD-DOG-MD5600X-A01-front.jpg",
      [new Price(10000), new Price(12500)],
      "computer"
    ),
    new Product(
      "Komputer ACER Predator Orion",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/32/3255358/Komputer-_ACER-Predator-Orion-3000-i5-11400F-_16GB-2x-SSD-1TB-GeForce-RTX3060Ti-Windows-10_Home-front.jpg",
      [new Price(4000), new Price(4500)],
      "computer"
    ),
    new Product(
      "Monitor ACER Predator ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/27/2726659/Monitor-ACER-Predator-XB253QGW-front.jpg",
      [new Price(2000), new Price(3500)],
      "monitor"
    ),
    new Product(
      "Monitor SAMSUNG Odyssey",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit lorem, sed sodales tortor vehicula id. Nam at molestie diam. Nullam hendrerit iaculis risus, ac sagittis elit. Mauris tincidunt vulputate velit id pellentesque. Proin fermentum lacinia est id pulvinar. Integer sagittis gravida arcu, eu ullamcorper turpis viverra vel. Sed nunc arcu, faucibus vitae porttitor nec, tincidunt sit amet elit. Aenean venenatis, elit ac rhoncus ultricies, lorem augue ultricies mauris, sed facilisis mauris arcu sit amet diam. Praesent ullamcorper a dolor vel vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Cras rhoncus imperdiet aliquam.",
      "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/27/2773343/Monitor-SAMSUNG-Odyssey-G5-C27G55TQWU-skos-lewy.jpg",
      [new Price(1000), new Price(1200)],
      "monitor"
    ),
  ];
  
  getProducts() {
    return this.products.filter(
      x=> 
      (x.type === 'phone' && this.filter.phone)
      || (x.type === 'computer' && this.filter.computer) 
      || (x.type === 'monitor' && this.filter.monitor) 
      )
    
  }
  getProduct(index: number) {
    return this.products[index];
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products);
  }
  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productsChanged.next(this.products);
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products);
  }
}
