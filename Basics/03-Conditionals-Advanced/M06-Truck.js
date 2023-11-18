function sum(input) {

    
    let season = input[0];
    let km = Number(input[1]);

    let sum = 0;

    switch (season) {

        case "Spring":
        case "Autumn":
            if (km <= 5000) {
                sum = km * 0.75;
            } else if (km <= 10000) {
                sum = km * 0.95;
            }
            break;

        case "Summer":
            if (km <= 5000) {
                sum = km * 0.9;
            } else if (km <= 10000) {
                sum = km * 1.1;
            }
            break;

        case "Winter":
            if (km <= 5000) {
                sum = km * 1.05;
            } else if (km <= 10000) {
                sum = km * 1.25;
            }
            break;

    }

    if (km > 10000) {
        sum = km * 1.45;
    }

    let sumAll = sum * 4;
    let sumAllFinal = sumAll * 0.9;


    console.log(sumAllFinal.toFixed(2));


}
sum(["Summer", "3455"]);
