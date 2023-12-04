function calcCost(input) {

    let furniture = [];
    let spent = 0;
    let regex = />>(?<item>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/g;
    let i = 0;
    let com = input[i];

    while (com !== 'Purchase') {

        if (com.match(regex)) {
            let variables = regex.exec(com).groups;
            let { item, price, qty } = variables;
            furniture.push(item);
            spent += price * qty;
        }

        i++
        com = input[i];

    }

    console.log(`Bought furniture:`);

    for (const item of furniture) {
        console.log(item);
    }

    console.log(`Total money spend: ${spent.toFixed(2)}`);

}