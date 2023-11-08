function price(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let seats = rows * columns;

    let seatsPrice = 0;

    switch (type) {
        case "Premiere":
            seatsPrice = seats * 12;
            break;

        case "Normal":
            seatsPrice = seats * 7.5;
            break;

        case "Discount":
            seatsPrice = seats * 5;
            break;

    }


    console.log(`${seatsPrice.toFixed(2)} leva`);


}
price(["Premiere", "10", "12"]);