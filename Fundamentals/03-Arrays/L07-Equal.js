function equalCheck(arr1, arr2) {

    let index = 0;
    let equal = true;
    let sum = 0;

    outer: for (let i = 0; i < arr1.length; i++) {

        let el = Number(arr1[i]);
        sum += el;

        for (let b = i; b < arr2.length; b++) {

            let el2 = Number(arr2[b]);

            if (el !== el2) {

                index = i;
                equal = false;

                break outer;

            }

            break;

        }

    }

    if (equal === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}
