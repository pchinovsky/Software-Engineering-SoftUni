function sum(n) {

    let nn = String(n);
    let sum = 0;

    for (let i = 0; i < nn.length; i++) {
        let digit = Number(nn[i]);
        sum += digit;
    }

    console.log(sum);

}
