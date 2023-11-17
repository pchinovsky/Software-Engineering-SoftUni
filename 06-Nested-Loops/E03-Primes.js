function primes(input) {


    let primes = 0;
    let nonPrimes = 0;

    let i = 0;
    let com = input[i];

    let prime = true;

    while (com !== "stop") {

        let num = Number(com);

        prime = true;

        if (num < 0) {
        
            console.log(`Number is negative.`);

        }

        if (num >= 0) {

            for (let c = 2; c < num; c++) {

                if (num % c === 0) {

                    prime = false;
                    break;

                }

            }


            if (prime === false) {

                nonPrimes += num;

            } else if (prime === true) {

                primes += num;

            }

        }

        i++
        com = input[i];

    }

    console.log(`Sum of all prime numbers is: ${primes}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimes}`);


}
