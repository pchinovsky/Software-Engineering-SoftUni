function price(input) {


    let food = input[0];
    let city = input[1];
    let qty = Number(input[2]);


    let price = 0;

    switch (city) {

        case "Sofia":
            if (food === "coffee") {
                price = qty * 0.5;
            } else if (food === "water") {
                price = qty * 0.8;
            } else if (food === "beer") {
                price = qty * 1.2;
            } else if (food === "sweets") {
                price = qty * 1.45;
            } else if (food === "peanuts") {
                price = qty * 1.6;
            }
            break;

        case "Plovdiv":
            if (food === "coffee") {
                price = qty * 0.4;
            } else if (food === "water") {
                price = qty * 0.7;
            } else if (food === "beer") {
                price = qty * 1.15;
            } else if (food === "sweets") {
                price = qty * 1.3;
            } else if (food === "peanuts") {
                price = qty * 1.5
            }
            break;

        case "Varna":
            if (food === "coffee") {
                price = qty * 0.45;
            } else if (food === "water") {
                price = qty * 0.7;
            } else if (food === "beer") {
                price = qty * 1.1;
            } else if (food === "sweets") {
                price = qty * 1.35;
            } else if (food === "peanuts") {
                price = qty * 1.55
            }
            break;

    }


    console.log(price);


}
price(["coffee", "Varna", "2"]);
