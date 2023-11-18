function game(input) {


    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let ticket = 0;
    let transport = 0;


    if (people < 5) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <= 9) {
        transport = budget * 0.6;
    } else if (people > 9 && people <= 24) {
        transport = budget * 0.5;
    } else if (people > 24 && people < 50) {
        transport = budget * 0.4;
    } else {
        transport = budget * 0.25;
    }

    let money = budget - transport;

    if (category === "Normal") {
        ticket = 249.99;
    } else if (category === "VIP") {
        ticket = 499.99;
    }


    let expense = ticket * people;

    let diff = Math.abs(money - expense);

    if (money > expense) {

        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

    } else if (money < expense) {

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        
    }


}
game(["30000", "VIP", "49"]);