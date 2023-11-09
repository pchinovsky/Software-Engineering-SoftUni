function multiplication(input) {

    
    let i = 0;
    let n = Number(input[i]);


    while (n >= 0) {

        console.log(`Result: ${(n * 2).toFixed(2)}`);

        i++;
        n = Number(input[i]);

    }


    console.log(`Negative number!`);


}
multiplication(["12", "43.2144", "12.3", "543.23", "-20"]);