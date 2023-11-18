function car(input) {


    let start = Number(input[0]);
    let end = Number(input[1]);

    let num = "";

    for (let a = start; a <= end; a++) {

        let d1 = String(a);

        for (let b = start; b <= end; b++) {

            let d2 = String(b);

            for (let c = start; c <= end; c++) {

                let d3 = String(c);

                for (let d = start; d <= end; d++) {

                    let d4 = String(d);

                    let comb = d1 + d2 + d3 + d4 + " ";

                    if ((Number(d1) % 2 === 0 & Number(d4) % 2 !== 0) || (Number(d1) % 2 !== 0 && Number(d4) % 2 === 0)) {

                        if (Number(d1) > Number(d4)) {

                            if ((Number(d2) + Number(d3)) % 2 === 0) {

                                num += comb;

                            }

                        }

                    }

                }

            }

        }

    }

    console.log(num);

}
