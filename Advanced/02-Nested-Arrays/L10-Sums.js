function sumDiagonals(input) {

    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let j = 1;

    for (let arr of input) {
        let num1 = arr[i];
        let num2 = arr[arr.length - j];
        sum1 += num1;
        sum2 += num2;
        i++
        j++
    }

    let sums = [sum1, sum2];

    console.log(sums.join(' '));

}