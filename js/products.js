// страница, id  контейнера, и отрисовка относительно обьекта (Product)
import { Product } from "./classes/product.js";

const productsContainer = document.getElementById("productsContainer");


const productsArr = [
    new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),
    new Product("product 3", 700, "./assets/products/product-3.png"),
    new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),

   new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),
    new Product("product 3", 700, "./assets/products/product-3.png"),
    new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),

    new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),
    new Product("product 3", 700, "./assets/products/product-3.png"),
    new Product("product 1", 500, "./assets/products/product-1.png"),
    new Product("product 2", 600, "./assets/products/product-2.png"),
];

const createProducts = (page, productsArr) => {
    
    productsArr.forEach( (product, index) => {
        // <div class="products-index__item"></div>
        const productItem = document.createElement("div");
        productItem.classList.add(`products-${page}__item`, "swiper-slide");
        // <div class="products-index__item__img__wrap"></div>
        const productItemImgWrap = document.createElement("div");
        productItemImgWrap.classList.add(`products-${page}__item__img__wrap`);
        productItem.appendChild(productItemImgWrap);
        // <img class="products-index__item__img" />
        const productItemImg = document.createElement("img");
        productItemImg.classList.add(`products-${page}__item__img`);
        productItemImg.setAttribute("src", product.imageSrc);
        productItemImgWrap.appendChild(productItemImg);
        // <p class="products-index__item__title"></p>
        const productTitle = document.createElement("p");
        productTitle.classList.add(`products-${page}__item__title`)
        productTitle.textContent = product.name;
        productItem.appendChild(productTitle);
        // <span class="products-index__item__price"></span>
        const productPrice = document.createElement("span");
        productPrice.classList.add(`products-${page}__item__price`)
        productPrice.textContent = `${product.price}.00 грн`;
        productItem.appendChild(productPrice);
        productsContainer.appendChild(productItem);
    });
    
}

createProducts("index", productsArr)