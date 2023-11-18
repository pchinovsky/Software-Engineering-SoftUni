function cat(input) {

    let offDays = Number(input[0]);

    let onDays = 365 - offDays;

    let playOffDays = offDays * 127;
    let playOnDays = onDays * 63;

    let totalPlay = playOffDays + playOnDays;

    let playNorm = 30000;

    let diff = Math.abs(playNorm - totalPlay);

    let hours = Math.floor(diff / 60);
    let mins = diff % 60;


    if (totalPlay > playNorm) {

        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${mins} minutes more for play`);

    } else {

        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${mins} minutes less for play`);
        
    }




}
cat(["20"]);