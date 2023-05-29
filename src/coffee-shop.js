module.exports = class CoffeeShop {
  constructor(barista) {
    this.barista = barista;
  }

  makeCappuccino() {
    return this.barista.brewCoffee();
  }
}
