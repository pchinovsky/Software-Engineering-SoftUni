function updateStock(stock, orders) {
 
    let store = {};

    for (let i = 0; i < stock.length; i += 2) {    
        let product = stock[i];
        let qty = Number(stock[i + 1]);
        store[product] = qty;
    }
 
    for (let j = 0; j < orders.length; j += 2) {
        let product = orders[j];
        let qty = Number(orders[j + 1]);

        if (!(store.hasOwnProperty(product))) {
            store[product] = qty;
        } else {
            store[product] += qty;
        }
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }

}