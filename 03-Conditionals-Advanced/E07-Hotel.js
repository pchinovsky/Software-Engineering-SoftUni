function hotel(input) {

let season = input[0];
let nights = Number(input[1]);

let studioPrice = 0;
let apartmentPrice = 0;

switch (season) {
    case "May":
    case "October":
        if (nights <= 7) {
            studioPrice = nights * 50;
        } else if (nights > 7 && nights <= 14) {
            studioPrice = nights * (50 * 0.95);
        } else if (nights > 14) {
            studioPrice = nights * (50 * 0.7);
        }
        apartmentPrice = nights * 65;
    break;

    case "June":
    case "September":
        if (nights <= 14) {
            studioPrice = nights * 75.2;
        } else if (nights > 14) {
            studioPrice = nights * (75.2 * 0.8);
        }
        apartmentPrice = nights * 68.7;
    break;

    case "July":
    case "August":
        studioPrice = nights * 76;
        apartmentPrice = nights * 77;
    break;

}

if (nights > 14) {
    apartmentPrice *= 0.9;
}

console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotel(["June", "14"]);