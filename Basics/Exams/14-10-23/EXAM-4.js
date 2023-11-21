function four(input) {


    let kmPerDay1 = Number(input[1]);

    let more = 0;

    let total = kmPerDay1;

    for (let i = 2; i < input.length; i++) {

        let percent = Number(input[i]) / 100;

        more = kmPerDay1 * percent;

        kmPerDay1 += more;
        total += kmPerDay1;

    }

    let diff = Math.abs(total - 1000);

    if (total >= 1000) {

        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);

    } else if (total < 1000) {

        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }


}
// four(["5",
// "30",
// "10",
// "15",
// "20",
// "5",
// "12"
// ]);
four(["4",
    "100",
    "30",
    "50",
    "60",
    "80"]);