function sum(arr) {

    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {

        let el = arr[i];
        sum += el;

        if (el % 2 === 0) {
            el += i;
        } else {
            el -= i;
        }

        sum2 += el;
        arr[i] = el;

    }

    console.log(arr);
    console.log(sum);
    console.log(sum2);

}
