function pets(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    let foodDog = Number(input[2]);
    let foodCat = Number(input[3]);
    let foodTurtle = Number(input[4]) / 1000;


    let foodDogNeed = foodDog * days;
    let foodCatNeed = foodCat * days;
    let foodTurtleNeed = foodTurtle * days;

    let totalFoodNeed = foodDogNeed + foodCatNeed + foodTurtleNeed;

    let diff = Math.abs(food - totalFoodNeed);


    if (totalFoodNeed <= food) {

        console.log(`${Math.floor(diff)} kilos of food left.`);

    } else {

        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
        
    }


}
pets(["2", "10", "1", "1", "1200"]);