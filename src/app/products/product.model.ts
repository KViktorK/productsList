export class Price{
    constructor(public value:number){}
}


export class Product {
  public name: string;
  public description: string;
  public imagePath: string;
  public prices: Price[];
  public type:string

  constructor(
    name: string,
    description: string,
    imagePath: string,
    prices: Price[],
    type:string
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.prices = prices;
    this.type = type;
  }

}
