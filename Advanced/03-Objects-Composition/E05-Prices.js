function lowestPrices(input) {
    let products = new Map();

    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = +price; 

        if (!products.has(product) || products.get(product).price > price) {
            products.set(product, { price, town });
        }
    }

    products.forEach((value, key) => {
        console.log(`${key} -> ${value.price} (${value.town})`);
    });
}