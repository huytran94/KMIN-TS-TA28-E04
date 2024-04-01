class Product {
  public name: string;
  public price: number;
  public quantity: number;
  public description: string;
  static totalProducts: number = 0;
  constructor(
    name: string,
    price: number,
    quantity: number,
    description: string
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    Product.totalProducts++;
  }
  public getTotalValue(): number {
    return this.price * this.quantity;
  }

  static getTotalProducts(): number {
    return Product.totalProducts;
  }
}



let product1 = new Product("TV", 1500, 3, "LG");
let product2 = new Product("TV", 1000, 100, "Toshiba");
let product3 = new Product("Phone", 100, 1, "Samsung");


console.log("###################################### PRODUCT 1 ##########");
console.log("Price of each product 1: ", product1.price)
console.log("Quantity of product 1: ", product1.quantity)
console.log("Total value of product 1: ", product1.getTotalValue())
console.log("###################################### PRODUCT 2 ##########");
console.log("Price of each product 2: ", product2.price)
console.log("Quantity of product 2: ", product2.quantity)
console.log("Total value of product 2: ", product2.getTotalValue())
console.log("###################################### PRODUCT 3 ##########");
console.log("Price of each product 3: ", product3.price)
console.log("Quantity of product 3: ", product3.quantity)
console.log("Total value of product 3: ", product3.getTotalValue())
console.log("###################################### TOTAL NUMBER OF PRODUCTS ##########");
console.log("TOTAL NUMBER OF ALL PRODUCTS", Product.getTotalProducts())