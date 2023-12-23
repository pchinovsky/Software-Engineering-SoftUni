function countBottles(data) {

    let bottles = {};
    let juices = {};

    for (const line of data) {
        let [juice, qty] = line.split(' => ');

        if (!juices[juice]) {
            juices[juice] = +qty;
        } else {
            juices[juice] += +qty;
        }

        if (juices[juice] >= 1000) {
            if (!bottles[juice]) {
                bottles[juice] = Math.trunc(juices[juice] / 1000);
                juices[juice] -= bottles[juice] * 1000;
            } else {
                bottles[juice] += Math.trunc(juices[juice] / 1000);
                juices[juice] %= 1000;
            }
        }
    }

    Object.entries(bottles).forEach(([juice, qty]) => console.log(`${juice} => ${qty}`));

}
countBottles(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);

