function three(input) {

    
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];

    let gain = 0;

    if (season === "summer") {

        switch (location) {
            case "Bulgaria":
                gain = points * dancers;
                gain *= 0.95;

                break;

            case "Abroad":
                gain = points * dancers;
                gain *= 1.5;
                gain *= 0.9;

                break;

        }

    } else if (season === "winter") {

        switch (location) {
            case "Bulgaria":
                gain = points * dancers;
                gain *= 0.92;

                break;

            case "Abroad":
                gain = points * dancers;
                gain *= 1.5;
                gain *= 0.85;

                break;

        }
    }

    let charity = gain * 0.75;

    let personalGain = gain - charity;

    let gainPerPerson = personalGain / dancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${gainPerPerson.toFixed(2)}`);


}
three(["1", "89.5", "summer", "Abroad"]);
