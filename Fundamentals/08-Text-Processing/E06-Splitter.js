function split(str) {

    let words = [];
    let word = str[0];
    let ind = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!(char.charCodeAt() >= 65 && char.charCodeAt() <= 90)) {
            word += char;

            if (i === str.length - 1) {
                words.push(word);
            }

        } else {

            if (i !== 0) {
                words.push(word);
                word = char;

                if (i === str.length - 1) {
                    words.push(word);
                }

            }

        }

    }

    console.log(words.join(', '));

}