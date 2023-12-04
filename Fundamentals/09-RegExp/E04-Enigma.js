function ops(input) {

    input.shift();
    let planets = { 'A': [], 'D': [] };
    let regexKey = /[star]/gi;

    for (const line of input) {
        let star = line.match(regexKey);
        let key = 0;

        if (star !== null) key = star.length;

        let regexMess = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?:\d+)[^@\-!:>]*!(?<att>[AD])![^@\-!:>]*->(?:\d+)/;
        let message = decrypt(line, key);

        if (message.match(regexMess)) {
            let variables = regexMess.exec(message).groups;
            let { planet, att } = variables;
            planets[att].push(planet);
        }

    }

    for (const category in planets) {
        let count = planets[category].length;

        if (category === 'A') {
            console.log(`Attacked planets: ${count}`);
        } else if (category === 'D') {
            console.log(`Destroyed planets: ${count}`);
        }

        if (count) {
            console.log(planets[category]
                .sort((a, b) => a.localeCompare(b))
                .map(el => `-> ${el}`)
                .join('\n'));
        }

    }

    function decrypt(str, key) {
        return [...str]
            .map(el => String.fromCharCode(el.charCodeAt() - key))
            .join('')
    }

}