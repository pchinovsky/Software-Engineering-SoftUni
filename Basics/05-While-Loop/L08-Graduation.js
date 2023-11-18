function finish(input) {


    let name = input[0];

    let i = 1;
    let mark = Number(input[i]);
    let markSum = 0;
    let fails = 0;


    while (i <= 12) {

        if (mark < 4) {

            fails++;

            if (fails === 2) {

                console.log(`${name} has been excluded at ${i - 1} grade`);
                break;

            }

        }

        markSum += mark;

        i++
        mark = Number(input[i]);

    }

    let avg = markSum / 12;

    if (fails < 2) {

        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);

    }


}
