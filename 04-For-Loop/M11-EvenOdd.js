function evenOdd(input) {


    let numbers = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;


    for (i = 1; i <= numbers; i++) {

        let num = Number(input[i]);

        if (i % 2 === 0) {
            evenSum += num;

            if (num > evenMax) {
                evenMax = num.toFixed(2);
            }

            if (num < evenMin) {
                evenMin = num.toFixed(2);
            }

        } else {
            
            oddSum += num;

            if (num > oddMax) {
                oddMax = num.toFixed(2);
            }

            if (num < oddMin) {
                oddMin = num.toFixed(2);
            }

        }

    }

    if (evenMin === Number.MAX_SAFE_INTEGER) {
        evenMin = "No";
    }

    if (evenMax === Number.MIN_SAFE_INTEGER) {
        evenMax = "No";
    }

    if (oddMin === Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
    }

    if (oddMax === Number.MIN_SAFE_INTEGER) {
        oddMax = "No";
    }


    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);


}
//evenOdd(["6", "2", "3", "5", "4", "2", "1"]);
//evenOdd(["1", "1"]);
evenOdd(["4", "1.5", "1.75", "1.5", "1.75"]);



