function trackBitcoins(shift) {


    let money = 0;
    let counter = 0;
    let bitcoinPrice = 11949.16;
    let bitcoins = 0;
    let bitcointGain = 0;

    let day = 0;
    let day1 = 0;

    for (let i = 0; i < shift.length; i++) {

        let gold = Number(shift[i]);

        counter++
        day++

        if (counter === 3) {

            money += (gold * 67.51) * 0.7;
            counter = 0;

        } else {

            money += gold * 67.51;

        }

        if (money >= bitcoinPrice) {

            for (let i = money; i >= bitcoinPrice; i -= bitcoinPrice) {

                bitcoins++
                money -= bitcoinPrice;

            }

            bitcointGain++

            if (bitcointGain === 1) {
                day1 = day;
            }

        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins !== 0) {

        console.log(`Day of the first purchased bitcoin: ${day1}`);

    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
