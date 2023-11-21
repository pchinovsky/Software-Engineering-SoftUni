function six(input) {

    let num = input[0];

    let d1 = num[2];
    let d2 = num[1];
    let d3 = num[0];

    for (let a = 1; a <= d1; a++) {

        for (let b = 1; b <= d2; b++) {

            for (let c = 1; c <= d3; c++) {

                let result = a * b * c;

                console.log(`${a} * ${b} * ${c} = ${result};`);

            }

        }

    }


}
six(["324"]);