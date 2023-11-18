function system(input) {


    let sumNeeded = Number(input[0]);
    let payCash = 0;
    let payCard = 0;
    let paymentsCard = 0;
    let paymentsCash = 0;

    let i = 1;

    let com = input[i];

    while (com !== "End") {

        let sum = Number(com);

        if (i % 2 === 0) {

            if (sum < 10) {

                console.log(`Error in transaction!`);

            } else {

                sumNeeded -= sum;
                payCard += sum;
                console.log(`Product sold!`);
                paymentsCard++

            }

        } else if (sum > 100) {

            console.log(`Error in transaction!`);

        } else {

            sumNeeded -= sum;
            payCash += sum;
            console.log(`Product sold!`);
            paymentsCash++

        }

        if (sumNeeded <= 0) {

            let avgPayCash = payCash / paymentsCash;
            let avgPayCard = payCard / paymentsCard;
            console.log(`Average CS: ${avgPayCash.toFixed(2)}`);
            console.log(`Average CC: ${avgPayCard.toFixed(2)}`);
            break;

        }

        i++
        com = input[i];

    }

    if (com === "End") {

        console.log(`Failed to collect required money for charity.`);

    }


}
