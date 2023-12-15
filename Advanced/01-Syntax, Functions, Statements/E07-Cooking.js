function processNumbers(start, ...opersArr) {

    const opers = {
        chop: (el) => el / 2,
        dice: (el) => Math.sqrt(el),
        spice: (el) => el + 1,
        bake: (el) => el * 3,
        fillet: (el) => (el * 0.8).toFixed(1)
    };

    let num = Number(start);

    for (const oper of opersArr) {
        num = opers[oper](num)
        console.log(num);
    }
    
}
