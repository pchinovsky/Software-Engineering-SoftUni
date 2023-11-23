function calc(n1, oper, n2) {

    let result = 0;

    let expression = `${n1} ${oper} ${n2}`;
    result = eval(expression);

    console.log(result.toFixed(2));

}
