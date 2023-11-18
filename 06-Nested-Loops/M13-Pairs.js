function generateCodes(input) {


    let start1 = Number(input[0]);
    let start2 = Number(input[1]);

    let diff1 = Number(input[2]);
    let diff2 = Number(input[3]);

    let end1 = start1 + diff1;
    let end2 = start2 + diff2;

    let check = true;

    for (let a = start1; a <= end1; a++) {

        for (let b = start2; b <= end2; b++) {

            check = true;

            for (let d = 2; d <= a; d++) {

                if (a % d === 0 && a !== d) {

                    check = false;
                    break;

                }

            }

            for (let d = 2; d <= a; d++) {

                if (b % d === 0 && b !== d) {

                    check = false
                    break;

                }

            }

            if (check === true) {

                console.log(`${a}${b}`);
            }

        }

    }


}
