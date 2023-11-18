function generatePassword(input) {


    let aa = Number(input[0]);
    let bb = Number(input[1]);
    let passMax = Number(input[2]);

    let string = "";
    let combCount = 0;

    let c1 = "";
    let d1 = "";

    let startC = 35;
    let startD = 64;
    let startA = 1;
    let startB = 1;

    outer: for (let c = startC; c <= 55; c++) {

        c1 = String.fromCharCode(c);

        for (let d = startD; d <= 96; d++) {

            d1 = String.fromCharCode(d);

            break;

        }

        nums: for (let a = startA; a <= aa; a++) {

            for (let b = startB; b <= bb; b++) {

                comb = `${c1}${d1}${a}${b}${d1}${c1}|`

                if (combCount === passMax) {

                    break outer;

                }

                string += comb;
                combCount++

                startB++

                if (startB > bb) {

                    startA++
                    startB = 1;

                }

                if (a === aa && b === bb) {

                    break outer;

                }

                break nums;

            }

        }

        if (startD === 96) {

            startD = 64;

        } else {

            startD++
        }

        if (c === 55) {

            c = 34;

        }

    }

    console.log(string);


}
