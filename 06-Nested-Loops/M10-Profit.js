function coins(input) {


    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);

    let sum = Number(input[3]);

    for (let a = 0; a <= coins1; a++) {

        for (let b = 0; b <= coins2; b++) {

            for (let c = 0; c <= coins5; c++) {

                if ((a * 1) + (b * 2) + (c * 5) === sum) {

                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`);
                
                }

            }

        }
    }


}
