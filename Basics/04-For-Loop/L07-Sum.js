function sum(input) {


    let numbers = input[0];
    let sum = 0;


    for (let i = 0; i < numbers.length; i++) {
        
        let num = Number(numbers[i]);
        sum += num;

    }


    console.log(`The sum of the digits is:${sum}`);


}
sum(["1234"]);
