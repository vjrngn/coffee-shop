const CoffeeCo = require('./coffee-co');
const Barista = require('./barista');
const CoffeeShop = require('./coffee-shop');


const ingredientProvider = new CoffeeCo();
const barista = new Barista(ingredientProvider);
const coffeeShop = new CoffeeShop(barista);

console.log(coffeeShop.makeCappuccino());
