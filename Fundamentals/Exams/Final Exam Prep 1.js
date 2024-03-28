function ops(input) {
    let stops = input.shift();

    let operations = {
        'Add Stop': ([, ind, str]) => {
            ind = Number(ind);
            if (ind >= 0 && ind < stops.length) {
                let temp = [...stops];
                temp.splice(ind, 0, str);
                stops = temp.join('');
            }
            console.log(stops);
        },
        'Remove Stop': (els) => {
            const indStart = Number(els[1]);
            const indEnd = Number(els[2]) + 1; 
            if (indStart >= 0 && indEnd < stops.length) {
                stops = stops.slice(0, indStart) + stops.slice(indEnd);
            }
            console.log(stops);
        },        
        'Switch': ([, oldStr, newStr]) => {
            if (stops.includes(oldStr)) {
                const regex = new RegExp(oldStr, 'g');
                stops = stops.replace(regex, newStr);
            }
            console.log(stops);
        },  
    };

    let com = input.shift();
    while (com !== 'Travel') {
        let oper = com.split(':')[0];
        const els = com.split(':');
        console.log(els);
        operations[oper](els);

        com = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
ops(["Hawai::Cyprys-Greece",

    "Add Stop:7:Rome",

    "Remove Stop:11:16",

    "Switch:Hawai:Bulgaria",

    "Travel"]);
