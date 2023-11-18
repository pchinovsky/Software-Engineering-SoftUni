function generateCombs(input) {


    let start = input[0];
    let end = input[1];
    let skip = input[2];

    let string = "";
    let count = 0;

    let check = true;

    for (let a = start.charCodeAt(0); a <= end.charCodeAt(0); a++) {

        let a1 = String.fromCharCode(a);

        for (let b = start.charCodeAt(0); b <= end.charCodeAt(0); b++) {

            let a2 = String.fromCharCode(b);

            for (let c = start.charCodeAt(0); c <= end.charCodeAt(0); c++) {

                let a3 = String.fromCharCode(c);

                let comb = a1 + a2 + a3;

                for (let d = 0; d <= 2; d++) {

                    let letter = comb[d];

                    check = true;

                    if (letter === skip) {

                        check = false;

                        break;

                    }

                }

                if (check === true) {

                    string += comb + " ";
                    count++

                }

            }

        }

    }

    console.log(`${string}${count}`);


}
