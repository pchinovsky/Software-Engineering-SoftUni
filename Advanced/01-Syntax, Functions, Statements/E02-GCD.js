function calcGCD(n1, n2) {
    
    let num1 = n1;
    let num2 = n2;

    while (num1 % num2 !== 0) {
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    }

    console.log(num2);
    
}