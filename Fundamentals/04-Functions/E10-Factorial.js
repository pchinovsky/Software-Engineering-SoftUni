function factorialDivision(n1, n2) {
 
    function factorial(num) {
     
        if (num === 0) {
            return 1;
        } else {
            return num *= factorial(num - 1);
        }
    }
    
    let division = factorial(n1) / factorial(n2);

    console.log(division.toFixed(2));

}
