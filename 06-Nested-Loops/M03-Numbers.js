function generateNums(input) {


    let num = Number(input[0]);

    let string = "";

    for (let a = 1111; a <= 9999; a++) {

        let d1 = String(a);

        if ((Number(d1[0]) + Number(d1[1]) === Number(d1[2]) + Number(d1[3]))) {

            if (num % (Number(d1[0]) + Number(d1[1])) === 0) {

                string += d1 + " ";

            }

        }

    }

    console.log(string);


}
