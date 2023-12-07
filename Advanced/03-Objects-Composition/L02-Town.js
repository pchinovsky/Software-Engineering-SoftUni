function registerTowns(input) {

    let towns = {};

    for (const town of input) {
        let [name, pop] = town.split(' <-> ');
        towns.hasOwnProperty(name) ? towns[name] += Number(pop) :  towns[name] = Number(pop);
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}