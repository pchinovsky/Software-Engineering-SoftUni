function findBiggerHalf(nums) {
 
    let sorted = nums.sort((a, b) => a - b);
    let mid = sorted.length % 2 === 0? sorted.length / 2 : Math.floor(sorted.length / 2);

    return sorted.slice(mid);
 
}