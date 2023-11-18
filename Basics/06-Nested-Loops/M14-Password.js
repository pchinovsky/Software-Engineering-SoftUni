function generatePassword(input) {


    let n = Number(input[0]);
    let L = Number(input[1]);

    let string = "";

    let countC1 = 0;
    let countD1 = 0;


    for (let a = 1; a <= n; a++) {

        for (let b = 1; b <= n; b++) {

            for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {

                let c1 = String.fromCharCode(c);

                countC1++

                if (countC1 > L) {

                    countC1 = 0;
                    break;

                }

                for (let d = "a".charCodeAt(0); d <= "z".charCodeAt(0); d++) {

                    let d1 = String.fromCharCode(d);

                    countD1++

                    if (countD1 > L) {

                        countD1 = 0;
                        break;

                    }

                    for (let e = 1; e <= n; e++) {

                        if (e > a && e > b) {

                            let comb = `${a}${b}${c1}${d1}${e} `;

                            string += comb;

                        }

                    }

                }

            }

        }

    }

    console.log(string);


}
