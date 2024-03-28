function ops(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterDayPerson = Number(input.shift());
    let foodDayPerson = Number(input.shift());

    let waterTotal = waterDayPerson * players * days;
    let foodTotal = foodDayPerson * players * days;

    for (let i = 0; i < input.length; i++) {
        energy -= Number(input[i]);

        if ( energy <= 0) {
            break;
        }

        if ((i + 1) % 2 === 0) {
            energy *= 1.05;
            waterTotal *= 0.7;
        }

        if ((i + 1) % 3 === 0) {
            let foodConsumed = foodTotal / players;
            foodTotal -= foodConsumed;
            energy *= 1.1;
        }
    }
    
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${foodTotal.toFixed(2)} food and ${waterTotal.toFixed(2)} water.`);
    }

}
ops(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);	
