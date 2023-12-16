function sortNums(nums) {

    let sorted = [];
    nums.sort((a, b) => a - b);

    let i = 0;
    while (nums.length !== 0) {
        i++ % 2 === 0 ? sorted.push(nums.shift()) : sorted.push(nums.pop());
    }

    return sorted;
}