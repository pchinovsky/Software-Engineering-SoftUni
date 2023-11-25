function sum(arr) {

    let parsed = arr.map(el => parseInt(el));
    let even = parsed.filter(el => el % 2 === 0);
    let sum = 0;

    for (let i = 0; i < even.length; i++) {
        let d = even[i];
        sum += d;
    }

    console.log(sum);

}
