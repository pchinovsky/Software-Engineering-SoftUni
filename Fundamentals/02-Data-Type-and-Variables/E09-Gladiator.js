function calcExpenses(lost, helmet, sword, shield, armor) {

    let price = 0;
    let count = 0;

    for (let i = 1; i <= lost; i++) {

        if (i % 2 === 0) {
            price += helmet;
        }

        if (i % 3 === 0) {
            price += sword;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            price += shield;
            count++

            if (count === 2) {
                price += armor;
                count = 0;
            }

        }

    }

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);

}
