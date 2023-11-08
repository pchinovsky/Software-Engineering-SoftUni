function boatRent(input) {


    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);


    let price = 0;

    switch (season) {

        case "Spring":
            price = 3000;
            break;

        case "Summer":
        case "Autumn":
            price = 4200;
            break;

        case "Winter":
            price = 2600;

    }

    if (fishermen <= 6) {
        price *= 0.9;
    } else if (fishermen <= 11) {
        price *= 0.85;
    } else if (fishermen > 12) {
        price *= 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        price *= 0.95;
    }


    let diff = Math.abs(budget - price);

    if (budget >= price) {

        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

    } else if (budget < price) {

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);

    }

    
}
boatRent(["3000", "Summer", "11"]);