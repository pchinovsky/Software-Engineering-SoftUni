function five(input) {

    
    let dayGoal = Number(input[0]);

    let i = 1;
    let com = input[i];

    let gain = 0;

    while (com !== "closed") {

        i++
        let type = input[i];

        switch (type) {

            case "mens":
                gain += 15;
                break;

            case "ladies":
                gain += 20;
                break;

            case "kids":
                gain += 10;
                break;

            case "touch up":
                gain += 20;

                break;

            case "full color":
                gain += 30;

        }

        if (gain >= dayGoal) {

            break;

        }

        i++
        com = input[i];

    }

    let diff = Math.abs(gain - dayGoal);

    if (gain >= dayGoal) {

        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${gain}lv.`);

    } else {

        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${gain}lv.`);

    }


}
five(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"]);