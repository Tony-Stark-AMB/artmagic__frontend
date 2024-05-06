export class Product {
    constructor(name, price, imageSrc) {
      this.name = name;
      this.price = price;
      this.quantity = 1;
      this.imageSrc = imageSrc
      this.id = Product.nextId(); // Assigning a unique ID to each object
    }
  
    static currentId = 1; // Static variable to keep track of the IDs
  
    static nextId() {
        return Product.currentId++;
    }

    static allTotalCost(productsArr){
        return productsArr.reduce((acc, curr) => +acc + (curr.quantity * curr.price) , [])
    }

    static deleteProduct(productsArr, id){
        return productsArr.filter((product) => product.id != id);
    }

    addOne(){this.quantity++};

    minusOne(){
        if(this.quantity > 1){
            this.quantity--;
        }
        return;
    }
}
