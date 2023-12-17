function composeObj(input) {
 
    let foods = {};
    for (let i = 0; i < input.length; i += 2) {
        let food = input[i];
        let cals = Number(input[i + 1]);
        foods[food] = cals;
    }

    console.log(foods);
}