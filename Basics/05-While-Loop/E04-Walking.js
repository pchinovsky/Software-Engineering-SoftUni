function steps(input) {


    let goal = 10000;

    let stepsCount = 0;

    let i = 0;
    let com = input[i];

    while (com !== "Going home") {

        let steps = Number(com);
        stepsCount += steps;

        let diff = Math.abs(stepsCount - goal);

        if (stepsCount >= goal) {

            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;

        }

        i++
        com = input[i];

    }

    if (com === "Going home") {

        let stepsHome = Number(input[i + 1]);

        stepsCount += stepsHome;

        let diff = Math.abs(stepsCount - goal);

        if (stepsCount >= goal) {

            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);

        } else {

            console.log(`${diff} more steps to reach goal.`);

        }

    }


}
