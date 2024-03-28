function ops2(input) {
    let route = input[0].split('||');
    let fuel = Number(input[1]);
    let ammo = Number(input[2]);

    let failed = false;

    outer: for (const line of route) {
        let [com, int] = line.split(' ');
        int = +int;

        if (com === 'Titan') break;

        switch (com) {
            case 'Travel':
                fuel -= int;
                if (fuel >= 0) {
                    console.log(`The spaceship travelled ${int} light-years.`);
                } else {
                    console.log(`Mission failed.`);
                    failed = true;
                    break outer;
                }
                break;

            case 'Enemy':
                if (ammo >= int) {
                    ammo -= int;
                    console.log(`An enemy with ${int} armour is defeated.`);
                } else {
                    fuel -= int * 2;

                    if (fuel >= 0) {
                        console.log(`An enemy with ${int} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.');
                        failed = true;
                        break outer;
                    }
                }

                break;

            case 'Repair':
                fuel += int;
                ammo += (int * 2);

                console.log(`Ammunitions added: ${int * 2}.`);
                console.log(`Fuel added: ${int}.`);
                break;
        }
    }

    if (!failed) console.log(`You have reached Titan, all passengers are safe.`);

}
ops2(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100']);

