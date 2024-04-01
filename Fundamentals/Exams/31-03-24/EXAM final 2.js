function ops2(input) {
    const comAmount = input.shift();
    const reg = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}\]/g;

    for (let i = 0; i < comAmount; i++) {
        const match = input[i].match(reg);
        if (match) {
            let com = match[0].split(':')[0].match(/[A-Za-z]+/g);
            let letters = match[0].split(':')[1].match(/[A-Za-z]+/g);
            let nums = [];
            for (const char of letters[0]) {
                let code = char.charCodeAt();
                nums.push(code);
            }
            console.log(`${com}: ${nums.join(' ')}`);
        } else {
            console.log(`The message is invalid`);
        }
    }
}
ops2(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]);