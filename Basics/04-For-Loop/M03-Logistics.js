function logistics(input) {


    let cargoAmount = Number(input[0]);
    let price = 0;
    let tonsSum = 0;
    let priceSum = 0

    let bus = 0;
    let truck = 0;
    let train = 0;


    for (let i = 1; i <= cargoAmount; i++) {

        let tons = Number(input[i]);

        tonsSum += tons;

        if (tons <= 3) {
            price = tons * 200;
            bus += tons;
        } else if (tons <= 11) {
            price = tons * 175;
            truck += tons;
        } else if (tons >= 12) {
            price = tons * 120;
            train += tons;
        }

        priceSum += price;

    }


    let pricePerTon = priceSum / tonsSum;

    let pBus = (bus / tonsSum) * 100;
    let pTruck = (truck / tonsSum) * 100;
    let pTrain = (train / tonsSum) * 100;


    console.log(pricePerTon.toFixed(2));
    console.log(`${pBus.toFixed(2)}%`);
    console.log(`${pTruck.toFixed(2)}%`);
    console.log(`${pTrain.toFixed(2)}%`);


}
logistics(["4", "1", "5", "16", "3"]);
