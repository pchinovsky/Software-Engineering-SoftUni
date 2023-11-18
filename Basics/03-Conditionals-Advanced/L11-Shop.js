function price(input) {

    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);

    let price = 0;


    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                price = qty * 2.5;
            } else if (fruit === "apple") {
                price = qty * 1.2;
            } else if (fruit === "orange") {
                price = qty * 0.85;
            } else if (fruit === "grapefruit") {
                price = qty * 1.45;
            } else if (fruit === "kiwi") {
                price = qty * 2.7;
            } else if (fruit === "pineapple") {
                price = qty * 5.5;
            } else if (fruit === "grapes") {
                price = qty * 3.85;
            }
            break;

        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                price = qty * 2.7;
            } else if (fruit === "apple") {
                price = qty * 1.25;
            } else if (fruit === "orange") {
                price = qty * 0.9;
            } else if (fruit === "grapefruit") {
                price = qty * 1.6;
            } else if (fruit === "kiwi") {
                price = qty * 3;
            } else if (fruit === "pineapple") {
                price = qty * 5.6;
            } else if (fruit === "grapes") {
                price = qty * 4.2;
            }
            break;

    }


    if (price > 0) {

        console.log(price.toFixed(2));

    } else {

        console.log("error");

    }


}
price(["tomato", "Tuesday", "0.5"]);