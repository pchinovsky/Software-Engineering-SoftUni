function register(input) {

    let heroes = [];

    for (const hero of input) {
        let [name, level, items] = hero.split(' / ');
        let newHero = { 'name': name, 'level': Number(level), 'items': items };
        heroes.push(newHero);
    }

    let sorted = heroes.sort((a, b) => a.level - b.level);

    for (const hero of sorted) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}