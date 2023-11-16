function cake(input) {


    let cakeSide1 = Number(input[0]);
    let cakeSide2 = Number(input[1]);

    let cakeArea = cakeSide1 * cakeSide2;

    let i = 2;
    let com = input[i];

    while (com !== "STOP") {

        let cakePieces = Number(com);

        cakeArea -= cakePieces;

        let diff = Math.abs(cakeArea);

        if (cakeArea <= 0) {

            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;

        }

        i++
        com = input[i];

    }

    if (cakeArea >= 0) {

        console.log(`${cakeArea} pieces are left.`);

    }


}
