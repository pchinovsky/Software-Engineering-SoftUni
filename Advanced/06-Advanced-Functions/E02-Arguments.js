function printTypeValue(...args) {
    let count = {};

    for (const arg of args) {
        console.log(`${typeof arg}: ${arg}`);
        if (count.hasOwnProperty(typeof arg)) {
            count[typeof arg] ++
        } else {
            count[typeof arg] = 1;
        }
    }

    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    sorted.forEach(arg => console.log(`${arg[0]} = ${arg[1]}`))

}
printTypeValue('cat', 42, function () { console.log('Hello world!'); });
