function catalogue(input) {
    
    let catalogue = {};

    for (const line of input) {
        let [product, price] = line.split(' : ');

        if (!catalogue[product[0]]) {
            catalogue[product[0]] = [];
        }

        catalogue[product[0]].push(`  ${product}: ${price}`);
    }

    let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const letter of sorted) {       
        console.log(letter);
        catalogue[letter].sort((a, b) => a.localeCompare(b));
        console.log(`${catalogue[letter].join('\n')}`);
    }

}