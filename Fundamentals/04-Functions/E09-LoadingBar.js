function loadingBar(n) {

    let bar = [];
    let signs = 0;

    for (let i = 0; i < 10; i++) {

        if (signs >= n / 10) {
            bar[i] = ".";
        } else {
            bar[i] = "%";
            signs++
        }
    }

    let str = `[${String(bar.join(""))}]`;

    if (n === 100) {
        console.log(`100% Complete!`);
        console.log(`${str}`);
    } else {
        console.log(`${n}% ${str}`);
        console.log(`Still loading...`);
    }

}
