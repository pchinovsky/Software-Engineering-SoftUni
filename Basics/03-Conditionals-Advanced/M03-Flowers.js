function flowers(input) {

    let chrisantemas = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let day = input[4];


    let flowers = chrisantemas + roses + tulips;
    let chrisantemasPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;


    switch (season) {

        case "Spring":
        case "Summer":
            chrisantemasPrice = chrisantemas * 2;
            rosesPrice = roses * 4.1;
            tulipsPrice = tulips * 2.5;
            break;

        case "Autumn":
        case "Winter":
            chrisantemasPrice = chrisantemas * 3.75;
            rosesPrice = roses * 4.5;
            tulipsPrice = tulips * 4.15;
            break;

    }


    if (day === "Y") {
        chrisantemasPrice *= 1.15;
        rosesPrice *= 1.15;
        tulipsPrice *= 1.15;
    }

    let bouquet = chrisantemasPrice + rosesPrice + tulipsPrice;

    if (tulips > 7 && season === "Spring") {
        bouquet *= 0.95;
    }
    if (roses >= 10 && season === "Winter") {
        bouquet *= 0.9;
    }
    if (flowers > 20) {
        bouquet *= 0.8;
    }

    let bouquetFinal = bouquet + 2;


    console.log(`${bouquetFinal.toFixed(2)}`);


}
flowers(["2", "4", "8", "Spring", "Y"]);