function flowers(input) {

    let f1 = Number(input[0]);
    let f2 = Number(input[1]);
    let f3 = Number(input[2]);
    let f4 = Number(input[3]);


    let present = Number(input[4]);

    let f1Price = f1 * 3.25;
    let f2Price = f2 * 4;
    let f3Price = f3 * 3.5;
    let f4Price = f4 * 8;

    let totalPrice = f1Price + f2Price + f3Price + f4Price;

    let taxes = 0.05 * totalPrice;
    let revenue = totalPrice - taxes;

    let diff = Math.abs(revenue - present);


    if (revenue >= present) {

        console.log(`She is left with ${Math.floor(diff)} leva.`);
        
    } else {

        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);

    }


}
flowers(["2", "3", "5", "1", "50"]);