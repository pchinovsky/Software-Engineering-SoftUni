function toys(input) {

    let tripCost = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);


    let totalToysAmount = puzzle + doll + bear + minion + truck;

    let puzzleCost = puzzle * 2.6;
    let dollCost = doll * 3;
    let bearCost = bear * 4.1;
    let minionCost = minion * 8.2;
    let truckCost = truck * 2;

    let totalToysCost = puzzleCost + dollCost + bearCost + minionCost + truckCost;

    if (totalToysAmount >= 50) {
        totalToysCost -= totalToysCost * 0.25;
    }

    let rent = totalToysCost * 0.1;

    let finalRevenue = totalToysCost - rent;

    let diff = Math.abs(tripCost - finalRevenue);


    if (finalRevenue >= tripCost) {

        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    } else {

        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);

    }


}
toys(["40.8", "20", "25", "30", "50", "10"]);