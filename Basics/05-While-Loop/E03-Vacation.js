function holiday(input) {


    let tripCost = Number(input[0]);
    let budget = Number(input[1]);
    let days = 0;

    let spends = 0;

    let i = 2;
    let com = input[i];

    while (budget < tripCost) {

        let sum = Number(input[i + 1]);

        switch (com) {

            case "save":
                budget += sum;
                spends = 0;
                break;

            case "spend":
                budget -= sum;
                spends++;
                break;

        }

        days++;

        if (spends === 5) {

            console.log(`You can't save the money.`);
            console.log(`${days}`);

            break;

        }

        if (budget <= 0) {
            budget = 0;
        }

        i += 2;
        com = input[i];

    }

    if (budget >= tripCost) {
        console.log(`You saved the money for ${days} days.`);
    }


}
