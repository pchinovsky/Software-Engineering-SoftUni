function processOdd(nums) {

    let output = nums
        .filter((el, ind) => ind % 2 !== 0)
        .map(el => el * 2)
        .reverse();

    console.log(output.join(' '));

}