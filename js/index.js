import { createProducts, Product } from "./classes/product.js";

const cardInput = document.querySelector(".card-input");
const walletInput = document.querySelector(".wallet-input");

const cardSvg = document.querySelector('.card-img');
const walletSvg = document.querySelector('.wallet-img');

const cardNumberInput = document.getElementById("card-input")

cardSvg.style.color = '#3e77aa'; // Change color for card SVG
walletSvg.style.color = '#7d7d7d'; // Reset color for wallet SVG

function handleInputChange() {
    if (cardInput.checked) {
        cardNumberInput.style.display = "block";
        cardSvg.style.color = '#3e77aa'; // Change color for card SVG
        walletSvg.style.color = '#7d7d7d'; // Reset color for wallet SVG
    } else if (walletInput.checked) {
        cardNumberInput.style.display = "none";
        walletSvg.style.color = '#3e77aa'; // Change color for wallet SVG
        cardSvg.style.color = '7d7d7d'; // Reset color for card SVG
    }
}

cardInput.addEventListener('change', handleInputChange);
walletInput.addEventListener('change', handleInputChange);

// Для продуктів


const productsContainer = document.getElementById("productsContainerIndex");

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

createProducts("index", productsArr, productsContainer);