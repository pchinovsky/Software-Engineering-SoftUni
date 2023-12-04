function calculate(n1, n2, oper) {

    let opers = {
        "*": (a, b) => a * b,
        "+": (a, b) => a + b,
        "/": (a, b) => a / b,
        "-": (a, b) => a - b,
        "%": (a, b) => a % b, 
        "**": (a, b) => a ** b
    };

    let result = opers[oper](n1, n2);
    console.log(result);

}