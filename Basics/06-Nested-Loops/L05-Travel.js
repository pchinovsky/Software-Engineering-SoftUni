function travel(input) {


    let i = 0;

    let com = input[i];
    let money = 0;

    while (com !== "End") {

        let destination = input[i];
        i++
        let cost = Number(input[i]);

        money = 0;

        while (money < cost) {

            i++

            let gain = Number(input[i]);

            money += gain;

            com = input[i];

        }

        console.log(`Going to ${destination}!`);

        i++

        com = input[i];

    }

}
