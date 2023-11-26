function addAndSubtract(n1, n2, n3) {

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    let sum = add(n1, n2);
    let result = subtract(sum, n3);

    console.log(result);

}
