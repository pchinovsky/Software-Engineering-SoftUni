function divide(num) {


    let numDiv = 0;

    let nums = [2, 3, 6, 7, 10];

    for (i = 0; i < nums.length; i++) {

        let d = Number(nums[i]);

        if (num % d === 0 && d > numDiv) {

            numDiv = d;

        }

    }

    if (numDiv === 0) {

        console.log(`Not divisible`);

    } else {

        console.log(`The number is divisible by ${numDiv}`);
    }


}
