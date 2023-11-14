function tennis(input) {


    let tournamentsDone = Number(input[0]);
    let pointsStart = Number(input[1]);

    let points = Number(input[1]);

    let won = 0;


    for (let i = 2; i <= tournamentsDone + 2; i++) {

        let result = input[i];

        switch (result) {
            case "W":
                points += 2000;
                won++;
                break;

            case "F":
                points += 1200;
                break;

            case "SF":
                points += 720;
                break;

        }

    }


    let average = (points - pointsStart) / tournamentsDone;

    let p1 = won / tournamentsDone * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${p1.toFixed(2)}%`);


}
tennis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
