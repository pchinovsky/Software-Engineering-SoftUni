function equal(arr) {

    let sumL = 0;
    let sumR = 0;
    let index = 0;
    let equal = false;

    for (let i = 0; i < arr.length; i++) {

        equal = false;
        sumL = 0;
        sumR = 0;

        if (i === 0) {
            sumL = 0;
        }

        if (i === arr.length - 1) {
            sumR = 0;
        }

        for (let a = 0; a < i; a++) {
            let n1 = arr[a];
            sumL += n1;
        }

        for (let b = i + 1; b < arr.length; b++) {
            let n2 = arr[b];
            sumR += n2;
        }

        if (sumL === sumR) {
            equal = true;
            index = i;
            break;
        }

    }

    if (equal === true) {
        console.log(index);
    } else {
        console.log("no");
    }

}
