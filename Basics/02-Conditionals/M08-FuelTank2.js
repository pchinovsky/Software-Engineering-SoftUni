function fuel(input) {

    let fuelType = input[0];
    let fuelAmount = Number(input[1]);

    let fuelPrice = 0;


    if (input[2] === "Yes") {
        if (fuelType === "Gas") {
            fuelPrice = fuelAmount * 0.85;
        } else if (fuelType === "Gasoline") {
            fuelPrice = fuelAmount * 2.04;
        } else if (fuelType === "Diesel") {
            fuelPrice = fuelAmount * 2.21;
        }
    } else if (input[2] === "No") {
        if (fuelType === "Gas") {
            fuelPrice = fuelAmount * 0.93;
        } else if (fuelType === "Gasoline") {
            fuelPrice = fuelAmount * 2.22;
        } else if (fuelType === "Diesel") {
            fuelPrice = fuelAmount * 2.33;
        }
    }

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        fuelPrice *= 0.92;
    } else if (fuelAmount > 25) {
        fuelPrice *= 0.9;
    }


    console.log(`${fuelPrice.toFixed(2)} lv.`);
    

}
fuel(["Gas", "30", "Yes"]);
fuel(["Diesel", "19", "No"]);