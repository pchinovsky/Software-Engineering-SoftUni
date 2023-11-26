function perfectNum(n) {

    let sum = 0;

    for (let i = 1; i < n; i++) {
        let divisor = i;

        if (n % divisor === 0) {
            sum += divisor;
        }
    }

    if (n === sum) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

}
