module.exports = class Barista {
  constructor(ingredientProvider) {
    this.ingredientProvider = ingredientProvider;
  }

  brewCoffee() {
    const coffeeBeans = this.ingredientProvider.getCoffeeBeans();
    const water = this.ingredientProvider.getWater();
    const milk = this.ingredientProvider.getMilk();

    console.log(
      `Brewing coffee with ${coffeeBeans}, ${water}, and ${milk}`
    )

    // Brew the perfect cup of cappuccino using the ingredients
    // ...
  }
}
