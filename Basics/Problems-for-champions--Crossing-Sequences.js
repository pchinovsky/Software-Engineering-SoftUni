function tribonaci(input) {


    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let nextNum1 = 0;

    let spiralStart = Number(input[3]);
    let spiralStep = Number(input[4]);
    let spiralMul = 1;

    let spiralCount = 0;

    let array = [];
    let array2 = [];

    array.push(n1, n2, n3);
    array2.push(spiralStart);

    for (let i = 0; nextNum1 < 1000000; i++) {

        nextNum1 = array[array.length - 1] + array[array.length - 2] + array[array.length - 3];
        array.push(nextNum1);

    }

    for (let i = 0; spiralStart < 1000000; i++) {

        if (spiralCount === 2) {
            spiralMul++;

            spiralCount = 0;

        }

        spiralStart += spiralStep * spiralMul;
        spiralCount++

        array2.push(spiralStart);

    }

    let found = false;

    for (let g = 0; g < array.length; g++) {

        for (let t = 0; t < array2.length; t++) {

            if (array[g] === array2[t] && array[g] <= 1000000) {

                console.log(array[g]);
                found = true;

                break;

            }

        }

        if (found === true) {
            break;

        }

    }

    if (!found) {

        console.log("No");

    }

}
tribonaci(["1", "4", "7", "23", "3"]);
