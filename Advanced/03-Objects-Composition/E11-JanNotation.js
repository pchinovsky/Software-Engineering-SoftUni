function processOperations(input) {

    const opers = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => b / a
    }

    let nums = [];
    for (const el of input) {

        if (+el) {
            nums.push(el);
        } else {
            if (!(nums.length < 2)) {
                nums.push(opers[el](nums.pop(), nums.pop()))
            } else {
                console.log(`Error: not enough operands!`);
                return;
            }
        }
    }

    if (nums.length > 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(nums[0]);
    }

}