function carsRegister(data) {
 
    let cars = {};

    for (const line of data) {
        let [brand, model, qty] = line.split(' | ');
        if (!cars[brand]) {
            cars[brand] = {};
            cars[brand][model] = +qty;
        } else {
            if (!cars[brand][model]) {
                cars[brand][model] = +qty;
            } else {
                cars[brand][model] += +qty;
            }
        }
    }

    for (const brand in cars) {
        console.log(`${brand}`);
        for (const model in cars[brand]) {
            console.log(`###${model} -> ${cars[brand][model]}`);
        }
    }

}
carsRegister(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);
