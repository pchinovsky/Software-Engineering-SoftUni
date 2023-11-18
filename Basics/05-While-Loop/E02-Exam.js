function exam(input) {


    let maxBadMarks = Number(input[0]);
    let badMarks = 0;
    let marksSum = 0;
    let marksCount = 0;
    let lastProblem = "";

    let i = 2;
    let com = input[1];

    while (com !== "Enough") {

        lastProblem = com;
        let mark = Number(input[i]);
        marksSum += mark;
        marksCount++
        i++

        if (mark <= 4) {

            badMarks++

            if (badMarks === maxBadMarks) {

                console.log(`You need a break, ${badMarks} poor grades.`);
                break;

            }

        }

        com = input[i];
        i++

    }

    let avg = marksSum / marksCount;

    if (com === "Enough") {

        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${marksCount}`);
        console.log(`Last problem: ${lastProblem}`);

    }


}
