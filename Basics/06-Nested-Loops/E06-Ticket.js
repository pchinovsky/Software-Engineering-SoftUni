function tickets(input) {


    let i = 0;
    let com = input[i];
    i++

    let student = 0;
    let standard = 0;
    let kid = 0;

    let studentAll = 0;
    let standardAll = 0;
    let kidAll = 0;

    while (com !== "Finish") {

        let film = com;

        let seats = Number(input[i]);
        i++

        student = 0;
        standard = 0;
        kid = 0;

        for (let u = 1; u <= seats; u++) {

            let ticket = input[i];

            switch (ticket) {

                case "student":

                    student++
                    studentAll++

                    break;

                case "standard":

                    standard++
                    standardAll++

                    break;

                case "kid":

                    kid++
                    kidAll++

                    break;

            }

            com = input[i];

            if (com === "Finish") {

                break;

            }

            i++

            if (com === "End") {

                break;

            }

        }

        let ticketsPerMovie = student + standard + kid;

        let full = (ticketsPerMovie / seats) * 100;

        console.log(`${film} - ${full.toFixed(2)}% full.`);

        ticketsPerMovie = 0;

        com = input[i];
        i++

    }

    if (com === "Finish") {

        let ticketsTotal = studentAll + standardAll + kidAll;

        console.log(`Total tickets: ${ticketsTotal}`);
        console.log(`${((studentAll / ticketsTotal) * 100).toFixed(2)}% student tickets.`);
        console.log(`${((standardAll / ticketsTotal) * 100).toFixed(2)}% standard tickets.`);
        console.log(`${((kidAll / ticketsTotal) * 100).toFixed(2)}% kids tickets.`);

    }


}
