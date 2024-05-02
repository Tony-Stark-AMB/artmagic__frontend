class Product {
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

    addOne(){this.quantity++};

    minusOne(){
        if(this.quantity > 1){
            this.quantity--;
        }
        return;
    }
}



const productsArr = [
    new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),
    new Product("product 3", 700, "./assets/products/product-3.png")
]


const productsContainer = document.getElementById("basket-products");

// const productsArr = [
//     {
//         name: "product 1", quantity: 1, price: 500, imageSrc: "./assets/products/product-1.png", id: 1,
//     },
//     {
//         name: "product 2", quantity: 1, price: 600, imageSrc: "./assets/products/product-2.png", id: 2
//     }
// ];


const createProducts = (products) => {
    products.forEach( (product, index) => {
        // <div class="cart__product"></div>
        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart__product");
        cartProduct.setAttribute("id", index + 1);
        // <div class="cart__product__overlook"></div>
        const cartProductOverlook = document.createElement("div");
        cartProductOverlook.classList.add("cart__product__overlook");
        cartProduct.appendChild(cartProductOverlook);
        // <div class="overlook__img__wrap"></div>
        const overlookImgWrap = document.createElement("div");
        overlookImgWrap.classList.add("overlook__img__wrap");
        cartProductOverlook.appendChild(overlookImgWrap);
        // <img class="overlook__img"/>
        const overlookImg = document.createElement("img");
        overlookImg.classList.add("overlook__img");
        overlookImg.setAttribute("src", product.imageSrc);
        overlookImgWrap.appendChild(overlookImg);
        // <p class="overlook__name"></p>
        const overlookName = document.createElement("p");
        overlookName.classList.add("overlook__name");
        overlookName.textContent = product.name;
        cartProductOverlook.appendChild(overlookName);
        // <div class="cart__product__btns"></div>
        const cartProductBtns = document.createElement("div");
        cartProductBtns.classList.add("cart__product__btns");
        cartProduct.appendChild(cartProductBtns);
        // <button class="btns__btn">-</button>
        const buttonMinus = document.createElement("button");
        buttonMinus.classList.add("btns__btn");
        buttonMinus.setAttribute("data-value", "-");
        buttonMinus.addEventListener("click", (e) => changeProductQuantity(e, product.id))
        buttonMinus.textContent = "-";
        cartProductBtns.appendChild(buttonMinus);
        // <input class="btns__count"/>
        const buttonCount = document.createElement("input");
        buttonCount.classList.add("btns__count");
        buttonCount.setAttribute("type", "text");
        buttonCount.setAttribute("id", `btn_count_${product.id}`)
        buttonCount.setAttribute("value", `${product.quantity}`);
        cartProductBtns.appendChild(buttonCount);
        // <button class="btns__btn">+</button>
        const buttonPlus = document.createElement("button");
        buttonPlus.classList.add("btns__btn");
        buttonPlus.setAttribute("data-value", "+");
        buttonPlus.addEventListener("click", (e) => changeProductQuantity(e, product.id))
        buttonPlus.textContent = "+";
        cartProductBtns.appendChild(buttonPlus);
        // <div class="cart__product__price"></div>
        const cartProductPrice = document.createElement("div");
        cartProductPrice.classList.add("cart__product__price");
        cartProductPrice.textContent = `${product.quantity * product.price}.00 грн`;
        cartProduct.appendChild(cartProductPrice);
        
        // Додаванння продуктів до контейнеру
        productsContainer.append(cartProduct);       
    });
    // <button class="btn btn-primary basket__modal__btn"></button>
    const btnBackToShopping = document.createElement("button");
    btnBackToShopping.classList.add("btn", "btn-primary", "basket__modal__btn");
    btnBackToShopping.setAttribute("onclick", "window.location.href = 'catalog.html'");
    btnBackToShopping.textContent = "Повернутись до покупок";
    productsContainer.append(btnBackToShopping);
}

createProducts(productsArr);

function changeProductQuantity(e, id){
    const changedProduct = productsArr.find((product) => product.id === id);
    const btnInput = document.getElementById(`btn_count_${id}`);
    const totalPrice = document.querySelectorAll(".cart__product__price")[id - 1];
   
    if(e.target.dataset.value == "+"){
        changedProduct.addOne();
        btnInput.value = changedProduct.quantity;
        totalPrice.textContent = `${changedProduct.quantity * changedProduct.price}.00 грн`;
        
    } else {
        changedProduct.minusOne();
        btnInput.value = changedProduct.quantity;
        totalPrice.textContent = `${changedProduct.quantity * changedProduct.price}.00 грн`;
    }
}
