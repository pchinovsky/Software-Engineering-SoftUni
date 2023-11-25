function evenOdd(arr) {

    let even = arr.filter(el => el % 2 === 0);
    let odd = arr.filter(el => el % 2 !== 0);

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < even.length; i++) {
        let num = even[i];
        sumEven += num;
    }

    for (let i = 0; i < odd.length; i++) {
        let num = odd[i];
        sumOdd += num;
    }

    let res = sumEven - sumOdd;

    console.log(res);

}
