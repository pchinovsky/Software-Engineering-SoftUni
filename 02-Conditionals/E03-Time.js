function time(input) {

    let minsTotal = Number(input[0]) * 60 + Number(input[1]) + 15;

    let hours = Math.floor(minsTotal / 60);
    let mins = minsTotal % 60;

    if (hours === 24) {
        hours = 0;
    }


    if (mins < 10) {

        console.log(`${hours}:0${mins}`);

    } else {

        console.log(`${hours}:${mins}`);

    }


}
time(["23", "59"]);