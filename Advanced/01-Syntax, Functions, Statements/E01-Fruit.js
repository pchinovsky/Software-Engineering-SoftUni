function calcFruitPrice(fruit, weight, cost) {
 
    const kgms = weight / 1000;
    const price = kgms * cost;

    console.log(`I need $${price.toFixed(2)} to buy ${kgms.toFixed(2)} kilograms ${fruit}.`);

}