function specialNums(input) {


    let n = Number(input[0]);

    let specials = "";

    let check = true;

    for (let i = 1111; i <= 9999; i++) {

        let num = String(i);

        check = true;

        for (let c = 0; c < num.length; c++) {

            let digit = Number(num[c]);

            if (n % digit !== 0) {

                check = false;
                break;

            }

        }

        if (check === true) {

            specials += String(num) + " ";

        }

    }

    console.log(specials);


}
