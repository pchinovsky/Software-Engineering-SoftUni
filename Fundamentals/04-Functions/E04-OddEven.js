function sumOddEven(n) {

    let n1 = String(n);

    function even(a) {
        let sum = 0;

        for (let i = 0; i < n1.length; i++) {
            let num = Number(n1[i]);

            if (num % 2 === 0) {
                sum += num;
            }
        }

        return sum;
    }

    function odd(b) {
        let sum = 0;

        for (let i = 0; i < n1.length; i++) {
            let num = Number(n1[i]);

            if (num % 2 !== 0) {
                sum += num;
            }
        }

        return sum;
    }

    console.log(`Odd sum = ${odd(n1)}, Even sum = ${even(n1)}`);

}
