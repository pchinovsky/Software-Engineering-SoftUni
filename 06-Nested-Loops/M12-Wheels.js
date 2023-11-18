function generatePassword(input) {


    let control = Number(input[0]);
    let string = "";
    let count = 0;
    let pass = "";

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if ((a * b) + (c * d) === control) {

                        if (a < b && c > d) {

                            let comb = `${a}${b}${c}${d}`;

                            string += comb + " ";
                            count++

                            if (count === 4) {

                                pass += comb;

                            }

                        }

                    }

                }

            }

        }

    }

    console.log(string);

    if (count >= 4) {

        console.log(`Password: ${pass}`);

    } else {

        console.log(`No!`);

    }

}
