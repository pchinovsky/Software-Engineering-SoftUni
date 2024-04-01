function ops3(input) {
    let anims = {};
    let hungryAnims = {};

    let opers = {
        'Add': ([name, food, area]) => {
            if (!anims[name]) {
                anims[name] = { food, area };
                if (hungryAnims[area] === undefined) hungryAnims[area] = 0;
                hungryAnims[area] += 1;
            } else {
                anims[name].food += food;
            }
        },
        'Feed': ([name, food]) => {
            if (anims[name]) {
                anims[name].food -= food;
            }
            if (anims[name].food <= 0) {
                console.log(`${name} was successfully fed`);
                const area = anims[name].area;
                hungryAnims[area] -= 1;
            }
        },
    };

    let com = input.shift();
    while (com !== 'EndDay') {
        let [act, els] = com.split(': ');
        els = els.split('-');
        els[1] = +els[1];

        opers[act](els);

        com = input.shift();
    }

    console.log('Animals:');
    for (const anim in anims) {
        if (anims[anim].food > 0) console.log(` ${anim} -> ${anims[anim].food}g`);
    }
    console.log(`Areas with hungry animals:`);
    for (const area in hungryAnims) {
        if (hungryAnims[area] > 0) console.log(` ${area}: ${hungryAnims[area]}`);
    }
}
ops3(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"]);