function farm(input) {

    let junk = {};
    let valuables = { 'shards': 0, 'fragments': 0, 'motes': 0 };
    let materials = input.split(' ');

    for (let i = 0; i < materials.length; i += 2) {
        let qty = Number(materials[i]);
        let material = materials[i + 1].toLowerCase();

        if (material in valuables) {
            valuables[material] += qty;
        } else {

            if (material in junk) {
                junk[material] += qty;
            } else {
                junk[material] = qty;
            }

        }

        if (valuables[material] >= 250) {
            obtain(material);
            valuables[material] -= 250;
            logValuables(valuables);
            logJunk(junk);
            break;
        }
    }

    function obtain(material) {
        let legendary = {
            'shards': () => console.log('Shadowmourne obtained!'),
            'motes': () => console.log('Dragonwrath obtained!'),
            'fragments': () => console.log('Valanyr obtained!')
        };
        return legendary[material]()
    }

    function logValuables(obj) {
        let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (const material of sorted) {
            console.log(`${material[0]}: ${material[1]}`);
        }

    }

    function logJunk(obj) {
        let sorted = Object.keys(obj).sort();

        for (const material of sorted) {
            console.log(`${material}: ${junk[material]}`);
        }

    }

}