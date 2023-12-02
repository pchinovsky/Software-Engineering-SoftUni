function findHashTag(input) {

    let words = input.split(' ');
    let tags = [];
    let special = true;

    for (let word of words) {
        special = true;

        if (word[0] === "#") {

            for (let i = 1; i < word.length; i++) {
                let letter = word[i];
                let code = letter.charCodeAt(0);

                if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
                    special = false;
                    break;
                }

            }

            if (special === true && word.length > 1) {
                word = word.slice(1);
                tags.push(word);
            }

        }

    }

    console.log(tags.join('\n'));

}