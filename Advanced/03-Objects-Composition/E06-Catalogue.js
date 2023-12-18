function catalogue(input) {
    let catalogue = {};

    for (const line of input) {
        let [product, price] = line.split(' : ');

        if (!catalogue[product[0]]) {
            catalogue[product[0]] = [];
        }
        catalogue[product[0]].push(`  ${product}: ${price}`);
    }

    let result = '';
    Object.keys(catalogue).sort((a, b) => a.localeCompare(b)).forEach((letter) => {
        result += `${letter}\n${catalogue[letter].sort().join('\n')}\n`;
    });
    console.log(result);

}