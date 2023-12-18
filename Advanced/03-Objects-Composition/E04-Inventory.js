function regHeroes(input) {

    let heroes = [];

    for (const hero of input) {
        let [name, level, items] = hero.split(' / ');
        let newHero = {
            name,
            'level': Number(level),
            'items': items ? items.split(', ') : []
        }
        heroes.push(newHero);
    }

    console.log(JSON.stringify(heroes));

}