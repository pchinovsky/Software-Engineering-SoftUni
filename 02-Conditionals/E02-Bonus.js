function bonus(input) {

    let num = Number(input[0]);

    if (num <= 100) {
        num += 5;
    } else if (num > 100 && num <= 1000) {
        num += num * 0.2;
    } else if (num > 1000) {
        num += num * 0.1;
    }

    if (Number(input[0]) % 2 === 0) {
        num += 1;
    } else if (Number(input[0]) % 10 === 5) {
        num += 2;
    }


    console.log(num - Number(input[0]));
    console.log(num);


}
bonus(["175"]);