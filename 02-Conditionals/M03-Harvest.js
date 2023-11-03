function harvest(input) {

    let yard = Number(input[0]);
    let grapes = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);


    let grapesTotal = yard * grapes;
    let wineMade = (grapesTotal / 2.5) * 0.4;

    let diff = Math.abs(wineNeeded - wineMade);

    let winePerWorker = (wineMade - wineNeeded) / workers;


    if (wineMade < wineNeeded) {

        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);

    } else if (wineMade >= wineNeeded) {

        console.log(`Good harvest this year! Total wine: ${Math.floor(wineMade)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);

    }



}
harvest(["650", "2", "175", "3"]);