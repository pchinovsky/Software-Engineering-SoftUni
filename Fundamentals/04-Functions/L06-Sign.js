function valenceCheck(n1, n2, n3) {

    let nums = [n1, n2, n3];
    let pos = 0;
    let neg = 0;

    for (n of nums) {

        if (n >= 0) {
            pos++
        } else {
            neg++
        }

    }

    if (neg === 2 || neg === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}
