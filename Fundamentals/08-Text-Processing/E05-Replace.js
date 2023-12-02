function reduceRepetitions(input) {

    let reduced = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char !== input[i + 1]) {
            reduced += char;
        }

    }

    console.log(reduced);

}