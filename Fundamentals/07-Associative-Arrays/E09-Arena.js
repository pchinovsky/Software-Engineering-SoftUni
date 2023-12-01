function gladiatorPool(input) {

    let gladiators = {};
    let gladiatorsLost = [];

    let i = 0;
    let com = input[i];

    let name = '';
    let tech = '';
    let skill = 0;

    while (com !== 'Ave Cesar') {

        if (com.includes('vs')) {
            let [name1, name2] = com.split(' vs ');

            if (gladiators[name1] && gladiators[name2]) {

                for (const tech in gladiators[name1]) {

                    for (const tech2 in gladiators[name2]) {

                        if (tech === tech2) {
                            let totalSkill1 = Object.values(gladiators[name1]).reduce((acc, val) => acc + val);
                            let totalSkill2 = Object.values(gladiators[name2]).reduce((acc, val) => acc + val);

                            if (totalSkill1 > totalSkill2) {
                                gladiatorsLost.push(name2);
                            } else if (totalSkill2 > totalSkill1) {
                                gladiatorsLost.push(name1);
                            }

                        }

                    }

                }

            }

        } else {
            [name, tech, skill] = com.split(' -> ');
        }

        if (!(gladiators[name])) {
            gladiators[name] = {};
            gladiators[name][tech] = Number(skill);
        } else {

            if (!(gladiators[name][tech])) {
                gladiators[name][tech] = Number(skill);
            } else {

                if (gladiators[name][tech] < Number(skill)) {
                    gladiators[name][tech] = Number(skill);
                }
            }
        }

        i++
        com = input[i]

    }

    for (const loser of gladiatorsLost) {
        delete gladiators[loser];
    }

    for (const gladiator in gladiators) {
        let totalSkill = Object.values(gladiators[gladiator]).reduce((acc, val) => acc + val);
        gladiators[gladiator]['skill'] = totalSkill;
    }

    let sorted = Object.entries(gladiators).sort((a, b) => b[1].skill - a[1].skill || a[0].localeCompare(b[0]));

    for (const gladiator of sorted) {
        let name = gladiator[0];
        let skill = gladiator[1].skill;
        console.log(`${name}: ${skill} skill`);
        let sortedTechs = Object.entries(gladiators[name]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (const tech of sortedTechs) {
            let technique = tech[0];
            let skill = tech[1];

            if (technique === 'skill') {
                continue;
            }

            console.log(`- ${technique} <!> ${skill}`);
        }

    }

}