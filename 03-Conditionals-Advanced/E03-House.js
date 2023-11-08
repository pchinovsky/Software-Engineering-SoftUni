function gardenBudget(input) {

    let flower = input[0];
    let flowerAmount = Number(input[1]);
    let budget = Number(input[2]);


    let price = 0;

    switch (flower) {

        case "Roses":
            price = flowerAmount * 5;
            if (flowerAmount > 80) {
                price *= 0.9;
            }
            break;

        case "Dahlias":
            price = flowerAmount * 3.8;
            if (flowerAmount > 90) {
                price *= 0.85;
            }
            break;

        case "Tulips":
            price = flowerAmount * 2.8;
            if (flowerAmount > 80) {
                price *= 0.85;
            }
            break;

        case "Narcissus":
            price = flowerAmount * 3;
            if (flowerAmount < 120) {
                price *= 1.15;
            }
            break;

        case "Gladiolus":
            price = flowerAmount * 2.5;
            if (flowerAmount < 80) {
                price *= 1.2;
            }
            break;

    }


    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerAmount} ${flower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }


}
gardenBudget(["Roses", "55", "250"]);