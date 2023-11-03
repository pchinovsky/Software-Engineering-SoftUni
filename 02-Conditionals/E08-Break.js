function rest(input) {

    let film = input[0];
    let filmDuration = Number(input[1]);
    let restDuration = Number(input[2]);


    let lunchTime = restDuration / 8;
    let restTime = restDuration / 4;

    let timeTaken = lunchTime + restTime;

    let diff = Math.abs(restDuration - timeTaken);

    let left = Math.abs(diff - filmDuration);

    if (diff >= filmDuration) {

        console.log(`You have enough time to watch ${film} and left with ${Math.ceil(left)} minutes free time.`);

    } else if (diff < filmDuration) {

        console.log(`You don't have enough time to watch ${film}, you need ${Math.ceil(left)} more minutes.`);
        
    }


}
rest(["Teen Wolf", "48", "60"]);