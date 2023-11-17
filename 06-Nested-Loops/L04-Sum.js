function sum(input) {


    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;

    let yes = false;

    for (let i = n1; i <= n2; i++) {

        for (let u = n1; u <= n2; u++) {

            counter++

            if (i + u === magicNumber) {

                yes = true;
                n1 = i;
                n2 = u;

                break;

            }

        }

        if (yes === true) {

            break;

        }

    }

    if (yes === false) {

        console.log(`${counter} combinations - neither equals ${magicNumber}`);

    } else if (yes === true) {

        console.log(`Combination N:${counter} (${n1} + ${n2} = ${magicNumber})`);

    }


}
