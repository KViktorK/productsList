interface IPrice {
  value: number;
}

export class Product {
  public name: string;
  public description: string;
  public imagePath: string;
  public prices: IPrice[];
  public type:string

  constructor(
    name: string,
    description: string,
    imagePath: string,
    prices: IPrice[],
    type:string
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.prices = prices;
    this.type = type;
  }
}
