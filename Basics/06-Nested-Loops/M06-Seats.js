function weddingSeats(input) {


    let lastSector = input[0];

    let rows1 = Number(input[1]);
    let seatsOdd = Number(input[2]);

    let seatCountOdd = 0;
    let seatCountEven = 0;

    let seatsAll = 0;

    for (let a = "A".charCodeAt(0); a <= lastSector.charCodeAt(0); a++) {

        let sect = String.fromCharCode(a);

        for (let rows = 1; rows <= rows1; rows++) {

            seatCountOdd = 0;
            seatCountEven = 0;

            if (rows % 2 !== 0) {

                for (let s = "a".charCodeAt(0); s <= "z".charCodeAt(0); s++) {

                    let seats = String.fromCharCode(s);

                    seatCountOdd++

                    if (seatCountOdd > seatsOdd) {

                        break;

                    }

                    console.log(`${sect}${rows}${seats}`);
                    seatsAll++

                }

            } else {

                for (let s = "a".charCodeAt(0); s <= "z".charCodeAt(0); s++) {

                    let seats = String.fromCharCode(s);

                    seatCountEven++

                    if (seatCountEven > seatsOdd + 2) {

                        break;

                    }

                    console.log(`${sect}${rows}${seats}`);
                    seatsAll++

                }

            }

        }

        rows1++

    }

    console.log(seatsAll);


}
