function one(input) {


    let processor = Number(input[0]) * 1.57;
    let card = Number(input[1]) * 1.57;
    let ram = Number(input[2]) * 1.57;
    let ramAmount = Number(input[3]);
    let discount = Number(input[4]);

    let price = 0;

    price += ram * ramAmount;

    let sum = processor + card;

    sum = sum - sum * discount;

    price += sum;

    console.log(`Money needed - ${price.toFixed(2)} leva.`);


}
one(["500", "200", "80", "2", "0.05"]);
