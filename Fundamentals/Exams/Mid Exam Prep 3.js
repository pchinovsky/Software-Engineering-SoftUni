function ops(input) {
    let cities = [];
    let com = input.shift();

    while (com !== 'Sail') {
        let [name, pop, gold] = com.split('||');
        let city = cities.find(obj => obj.name === name);
        if (city) {
            city.pop += Number(pop);
            city.gold += Number(gold);
        } else {
            let newCity = {};
            newCity['name'] = name;
            newCity['pop'] = Number(pop);
            newCity['gold'] = Number(gold);
            cities.push(newCity);
        }

        com = input.shift();
    }

    com = input.shift();
    let wiped = [];

    while (com !== 'End') {
        let els = com.split('=>');
        let oper = els.shift();

        if (oper === 'Plunder') {
            let [city, people, gold] = els;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            let found = cities.find(obj => obj.name === city);
            found.pop -= Number(people);
            found.gold -= Number(gold);

            if (found.gold <= 0 || found.pop <= 0) {
                wiped.push(city);
                console.log(`${city} has been wiped off the map!`);
            }

        } else if (oper === 'Prosper') {
            let [city, gold] = els;

            if (Number(gold) < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                let found = cities.find(obj => obj.name === city);
                found.gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${city} now has ${found.gold} gold.`);
            }

        }

        com = input.shift();

    }

    for (const city of wiped) {
        let found = cities.find(obj => obj.name === city);
        let ind = cities.indexOf(found);
        cities.splice(ind, 1);
    }

    if (cities.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`);
        for (const city of cities) {
            console.log(`${city.name} -> Population: ${city.pop} citizens, Gold: ${city.gold} kg`);
        }
    }
}
ops(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"]);
