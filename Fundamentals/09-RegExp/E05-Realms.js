function regDemons(input) {

    let demons = input.split(',').map(el => el.trim());
    let regex1 = /[^\d\+\-\*\/\.]/g;
    let regex2 = /-?\d+(\.\d+)?/g
    let regex3 = /[\*\/]/g;
    let demonsOrdered = {};

    for (const dem of demons) {
        let health = dem.match(regex1).map(el => el.charCodeAt()).reduce((acc, val) => acc + val);
        let damage = 0;
        let operFs = { '/': (el) => el / 2, '*': (el) => el * 2 };

        if (dem.match(regex2)) {
            damage = Number(dem.match(regex2).reduce((acc, val) => +acc + +val));

            if (dem.match(regex3)) {
                let opers = [...dem].filter(el => el.match(regex3));

                for (const oper of opers) {
                    damage = operFs[oper](damage);
                }

            }

        }

        demonsOrdered[dem] = [];
        demonsOrdered[dem].push(`${health} health`, `${damage.toFixed(2)} damage`);

    }

    let sorted = Object.keys(demonsOrdered).sort();

    for (const dem of sorted) {
        console.log(`${dem} - ${demonsOrdered[dem].join(', ')}`);
    }

}