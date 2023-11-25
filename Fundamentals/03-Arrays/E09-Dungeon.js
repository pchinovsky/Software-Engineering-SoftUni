function dungeon(arr) {

    let health = 100;
    let coins = 0;
    let arr1 = arr[0].split("|");
    let room = 0;

    outer: for (let i = 0; i < arr1.length; i++) {

        let com = arr1[i];
        let com1 = com.split(" ");

        switch (com1[0]) {

            case "potion":

                let need = 100 - health;

                health += Number(com1[1]);

                if (health > 100) {
                    console.log(`You healed for ${need} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                } else {
                    console.log(`You healed for ${Number(com1[1])} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }

                break;

            case "chest":

                coins += Number(com1[1]);
                console.log(`You found ${Number(com1[1])} coins.`);

                break;

            default:

                health -= Number(com1[1]);

                if (health <= 0) {
                    console.log(`You died! Killed by ${com1[0]}.`);
                    room = i + 1;
                    break outer;
                } else {
                    console.log(`You slayed ${com1[0]}.`);
                }

        }

    }

    if (room === 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    } else {
        console.log(`Best room: ${room}`);
    }

}
