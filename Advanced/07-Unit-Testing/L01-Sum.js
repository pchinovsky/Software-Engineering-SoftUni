function sum(nums, startInd, endInd) {

    if (!Array.isArray(nums)) return NaN;
    if (startInd < 0) startInd = 0;
    if (endInd > nums.length - 1) endInd = nums.length - 1;

    let total = nums
        .slice(startInd, endInd + 1)
        .map(Number)
        .reduce((acc, val) => acc + val, 0);

    return total;

}
