function sum(input) {

    let runner1 = Number(input[0]);
    let runner2 = Number(input[1]);
    let runner3 = Number(input[2]);

    let totalTime = runner1 + runner2 + runner3;

    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;

    if (sec < 10) {

        console.log(`${min}:0${sec}`);

    } else {

        console.log(`${min}:${sec}`);

    }



}
sum(["35", "45", "44"]);