function kNums(nums) {
 
    let k = nums[0];
    let kStart = nums.slice(1, k + 1);
    let kEnd = nums.slice(nums.length - k, );

    console.log(kStart.join(' '));
    console.log(kEnd.join(' '));
 
}