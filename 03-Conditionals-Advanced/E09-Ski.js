function ski(input) {

let days = Number(input[0]);
let nights = Number(input[0]) - 1;
let room = input[1];
let eval = input[2];

let price = 0;

switch (room) {
    case "room for one person":
        price = nights * 18;
    break;

    case "apartment":
        if (days < 10 && days !== 1) {
            price = nights * (25 * 0.7);
        } else if (days >= 10 && days <= 15) {
            price = nights * (25 * 0.65);
        } else if (days > 15) {
            price = nights * (25 * 0.5);
        }
    break;

    case "president apartment":
        if (days < 10 && days !== 1) {
            price = nights * (35 * 0.9);
        } else if (days >= 10 && days <= 15) {
            price = nights * (35 * 0.85);
        } else if (days > 15) {
            price = nights * (35 * 0.8);
        }
    break;

}

if (eval === "positive") {
    price *= 1.25;
} else if (eval === "negative") {
    price *= 0.9;
}

console.log(price.toFixed(2));

}
ski(["14", "apartment", "positive"]);