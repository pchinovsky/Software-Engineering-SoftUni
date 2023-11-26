function order(prod, amount) {

    let price = 0;

    switch (prod) {

        case "water":
            price = amount * 1;
            break;

        case "coffee":
            price = amount * 1.5;
            break;

        case "coke":
            price = amount * 1.4;
            break;

        case "snacks":
            price = amount * 2;
            break;

    }

    return price.toFixed(2);

}
