function storage(input) {
 
    let storage = new Map ();

    for (const entry of input) {       
        let [product, qty] = entry.split(' ');

        if (storage.has(product)) {
            let value = Number(storage.get(product)) 
            value += Number(qty);
            storage.set(product, value);
        } else {
            storage.set(product, qty);
        }

    }
 
    for (const key of storage) {
        console.log(key.join(' -> '));
    }

}