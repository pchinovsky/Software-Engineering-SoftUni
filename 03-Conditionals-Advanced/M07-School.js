function camp(input) {


    let season = input[0];
    let groupMembers = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = "";


    switch (groupMembers) {

        case "girls":
            if (season === "Winter") {
                sport = "Gymnastics";
            } else if (season === "Spring") {
                sport = "Athletics";
            } else if (season === "Summer") {
                sport = "Volleyball";
            }
            break;

        case "boys":
            if (season === "Winter") {
                sport = "Judo";
            } else if (season === "Spring") {
                sport = "Tennis";
            } else if (season === "Summer") {
                sport = "Football";
            }
            break;

        case "mixed":
            if (season === "Winter") {
                sport = "Ski";
            } else if (season === "Spring") {
                sport = "Cycling";
            } else if (season === "Summer") {
                sport = "Swimming";
            }
            break;

    }


    switch (groupMembers) {
        case "boys":
        case "girls":
            if (season === "Winter") {
                price = nights * 9.6;
            } else if (season === "Spring") {
                price = nights * 7.2;
            } else if (season === "Summer") {
                price = nights * 15;
            }
            break;

        case "mixed":
            if (season === "Winter") {
                price = nights * 10;
            } else if (season === "Spring") {
                price = nights * 9.5;
            } else if (season === "Summer") {
                price = nights * 20;
            }
            break;

    }

    let priceAll = price * students;

    if (students >= 50) {
        priceAll *= 0.5;
    } else if (students < 50 && students >= 20) {
        priceAll *= 0.85;
    } else if (students >= 10 && students < 20) {
        priceAll *= 0.95;
    }


    console.log(`${sport} ${priceAll.toFixed(2)} lv.`);


}
camp(["Spring", "girls", "20", "7"]);