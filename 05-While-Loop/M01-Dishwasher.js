function washer(input) {


    let detergent = Number(input[0]) * 750;
    let dishesCleaned = 0;
    let potsCleaned = 0;

    let dishesI = 1;
    let potsI = 3;

    let com = input[dishesI];

    while (com !== "End") {

        let dishes = Number(com);

        if (dishesI === potsI) {

            detergent -= dishes * 15;
            potsCleaned += dishes;
            potsI += 3;

        } else {

            detergent -= dishes * 5;
            dishesCleaned += dishes;

        }

        let diff = Math.abs(detergent);

        if (detergent < 0) {

            console.log(`Not enough detergent, ${diff} ml. more necessary!`);
            break;

        }

        dishesI++
        com = input[dishesI];

    }

    if (com === "End") {

        console.log(`Detergent was enough!`);
        console.log(`${dishesCleaned} dishes and ${potsCleaned} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);

    }


}
