function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];


    let price = 0;
    let location = "";
    let type = "";


    if (budget <= 100) {

        location = "Bulgaria";

        if (season === "summer") {
            price = budget * 0.3;
        } else {
            price = budget * 0.7;
        }

    } else if (budget > 100 && budget <= 1000) {

        location = "Balkans";

        if (season === "summer") {
            price = budget * 0.4;
        } else {
            price = budget * 0.8;
        }

    } else if (budget > 1000) {
       
        location = "Europe";

        price = budget * 0.9;

    }

    switch (location) {

        case "Europe":
            type = "Hotel";
            break;

        case "Bulgaria":
        case "Balkans":
            if (season === "summer") {
                type = "Camp";
            } else if (season === "winter") {
                type = "Hotel";
            }
            break;

    }


    console.log(`Somewhere in ${location}`);
    console.log(`${type} - ${price.toFixed(2)}`);

    
}
journey(["1150", "summer"]);