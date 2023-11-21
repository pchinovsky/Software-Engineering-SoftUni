function two(input) {


    let shirt = Number(input[0]);
    let sum = Number(input[1]);

    let shorts = shirt * 0.75;
    let shoes = (shirt + shorts) * 2;
    let socks = shorts * 0.2;

    let total = shirt + shorts + shoes + socks;

    total *= 0.85;

    if (total >= sum) {

        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${total.toFixed(2)} lv.`);

    } else {

        let diff = Math.abs(total - sum);

        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
        
    }


}
two(["25", "100"]);