function godzilla(input) {

    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let costume = Number(input[2]);


    let decor = budget * 0.1;
    let costumes = actors * costume;

    if (actors > 150) {
        costumes *= 0.9;
    }

    let total = decor + costumes;

    let diff = Math.abs(budget - total);


    if (budget >= total) {

        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);

    } else if (budget < total) {

        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);

    }



}
godzilla(["15437.62", "186", "57.99"])