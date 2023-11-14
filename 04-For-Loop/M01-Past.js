function past(input) {


    let money = Number(input[0]);
    let year = Number(input[1]);
    let age = 18;


    for (let i = 1800; i <= year; i++) {

        if (i % 2 === 0) {
            money -= 12000;
        } else {
            money -= 12000 + (50 * age);
        }

        age++;

    }

    let diff = Math.abs(money);


    if (money >= 0) {

        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);

    } else if (money < 0) {

        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
        
    }


}
past(["50000", "1802"]);
