function balance(input) {


    let total = 0;

    let i = 0;
    let sum = input[i];


    while (sum !== "NoMoreMoney") {

        sum = Number(sum);

        if (sum < 0) {

            console.log(`Invalid operation!`);
            break;

        }

        console.log(`Increase: ${sum.toFixed(2)}`);

        total += sum;

        i++
        sum = input[i];

    }


    console.log(`Total: ${total.toFixed(2)}`);


}
