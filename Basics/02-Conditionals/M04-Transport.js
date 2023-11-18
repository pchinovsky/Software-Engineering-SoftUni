function transport(input) {

    let km = Number(input[0]);
    let period = input[1];

    let taxiDay = 0.79;
    let taxiNight = 0.9;
    let bus = 0.09;
    let train = 0.06;

    
    tripPrice = km;

    if (km >= 100) {
        tripPrice *= train;
    } else if (km < 100 && km >= 20) {
        tripPrice *= bus;
    } else if (km < 20 && period === "day") {
        tripPrice *= taxiDay;
        tripPrice += 0.7;
    } else if (km < 20 && period === "night") {
        tripPrice *= taxiNight;
        tripPrice += 0.7;
    }


    console.log(`${tripPrice.toFixed(2)}`);


}
transport(["25", "day"]);