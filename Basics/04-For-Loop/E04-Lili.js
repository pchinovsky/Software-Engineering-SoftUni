function lili(input) {

    
    let age = Number(input[0]);
    let washer = Number(input[1]);
    let toy = Number(input[2]);

    let sum = 0;
    let birthdayMoney = 10;


    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            sum += birthdayMoney - 1;
            birthdayMoney += 10;
        } else {
            sum += toy;
        }

    }

    let diff = Math.abs(sum - washer);

    if (sum >= washer) {

        console.log(`Yes! ${diff.toFixed(2)}`);

    } else {

        console.log(`No! ${diff.toFixed(2)}`);
        
    }


}
lili(["10", "170.00", "6"]);
