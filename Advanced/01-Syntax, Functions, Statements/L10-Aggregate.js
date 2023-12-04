function aggregate(input) {

    calc(input, 0, (a, b) => a + b)
    calc(input, 0, (a, b) => a + 1 / b)
    calc(input, '', (a, b) => a + b)

    function calc(arr, init, func) {
        console.log(arr.reduce(func, init));
    }

}