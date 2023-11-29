function inventory(input) {

    let inventory = input.shift().split(' ');

    for (const line of input) {
        let [com, equipment] = line.split(' ');
        let ind = inventory.indexOf(equipment);

        switch (com) {

            case "Buy":
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;

            case "Trash":
                if (inventory.includes(equipment)) {
                    inventory.splice(ind, 1);
                }
                break;

            case "Repair":
                if (inventory.includes(equipment)) {
                    let equipmentOut = inventory.splice(ind, 1);
                    inventory.push(equipmentOut[0]);
                }
                break;

            case "Upgrade":
                let equipmentUpgrade = equipment.split('-');
                let [item, upgrade] = equipmentUpgrade;
                ind = inventory.indexOf(item);

                if (inventory.includes(item)) {
                    inventory.splice(ind + 1, 0, (`${inventory[ind]}` + `:${upgrade}`));
                }
                break;
        }
    }

    console.log(inventory.join(' '));

}
