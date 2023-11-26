function pow(num, pow) {

    let n = num;

    for (let i = 1; i < pow; i++) {
        n *= num;
    }

    console.log(n);

}
