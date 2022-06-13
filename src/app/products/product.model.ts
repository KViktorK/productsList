export class Product {
  public name: string;
  public description: string;
  public imagePath: string;
  public prices: number[];
  public type:string

  constructor(
    name: string,
    description: string,
    imagePath: string,
    prices: number[],
    type:string
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.prices = prices;
    this.type = type;
  }
}
