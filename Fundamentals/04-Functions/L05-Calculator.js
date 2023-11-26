function calc(n1, n2, oper) {

    let opers = {
        "multiply": (a, b) => a * b,
        "add": (a, b) => a + b,
        "divide": (a, b) => a / b,
        "subtract": (a, b) => a - b
    };

    let result = opers[oper](n1, n2);

    console.log(result);

}
