function findSmallest(nums) {
 
    let sorted = nums.sort((a, b) => a - b);
    sorted.length = 2

    console.log(sorted.join(' '));
 
}