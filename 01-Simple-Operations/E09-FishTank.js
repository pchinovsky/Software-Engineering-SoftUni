function aquarium(input) {

    let volume = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let objectsPercent = Number(input[3]) / 100;
    let objects = volume * objectsPercent;


    let availableVolume = volume - objects;
    let litres = availableVolume / 1000;


    console.log(litres);


}
aquarium(["85", "75", "47", "17"]);