function oscars(input) {


    let name = input[0];

    let points = Number(input[1]);


    for (let i = 3; i < input.length; i += 2) {

        let index = input[i];

        points += (index.length * Number(input[i + 1])) / 2;

        if (points > 1250.5) {

            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;

        }

    }

    let diff = Math.abs(1250.5 - points);

    if (points < 1250.5) {

        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);

    }


}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);

