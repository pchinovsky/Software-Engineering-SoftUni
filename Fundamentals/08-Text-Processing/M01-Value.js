function sumCodes(input) {

    let cue = input.pop();
    let check = (cue === 'LOWERCASE') ? isLowerCase : isUpperCase;

    let sum = input[0]
        .split('')
        .filter(char => char.charCodeAt() >= 65 && char.charCodeAt() <= 90 || char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
        .filter(check)
        .reduce((acc, val) => acc + val.charCodeAt(), 0);

    console.log(`The total sum is: ${sum}`);

    function isUpperCase(char) {
        return char === char.toUpperCase();
    }

    function isLowerCase(char) {
        return char === char.toLowerCase();
    }

}