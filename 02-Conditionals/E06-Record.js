function record(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);

    let swimTime = distance * speed;

    let waterResistance = (Math.floor(distance / 15)) * 12.5;

    let actualswimTime = swimTime + waterResistance;

    let diff = Math.abs(record - actualswimTime);

    if (actualswimTime < record) {

        console.log(`Yes, he succeeded! The new world record is ${actualswimTime.toFixed(2)} seconds.`);

    } else {

        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
        
    }


}
record(["55555.67", "3017", "5.03"]);