function generatePassword(input) {

    let [str1, str2, refStr] = input;
    let str = str1 + str2;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let passwordChars = [];
    let start = 0;

    outer: for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!(vowels.includes(char))) {
            passwordChars.push(char);
        } else {

            for (let j = start; j < refStr.length; j++) {
                let char2 = refStr[j].toUpperCase();
                passwordChars.push(char2);
                start ++

                if (start === refStr.length) {
                    start = 0;
                }
                break;

            }

        }

    }

    let password = passwordChars.reverse().join('');

    console.log(`Your generated password is ${password}`);

}