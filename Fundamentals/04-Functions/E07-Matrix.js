function matrix(n) {

    let str = "";

    for (let i = 1; i <= n; i++) {
        str = String(n + " ").repeat(n);
        console.log(str);
    }

}
