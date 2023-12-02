function calculateCombs(input) {

    let combs = input.split(' '); 
    let sum = 0;

    for (let comb of combs) {

        if (comb !== '') {
            comb = comb.split('')
            let char1 = comb.shift();
            let char2 = comb.pop();
            let num = +comb.join('');
            let result = calc(num, char1, char2);
            sum += result;
        }

    }

    console.log(sum.toFixed(2));

    function pos(char) {
        return char
            .toLowerCase()
            .charCodeAt() - 96;
    }

    function calc(num, char1, char2) {
        let low = char1.toLowerCase();
        let low2 = char2.toLowerCase();

        if (char1 === low) {
            num *= pos(char1);
        } else {
            num /= pos(char1);
        }

        if (char2 === low2) {
            num += pos(char2);
        } else {
            num -= pos(char2);
        }

        return num;

    }

}