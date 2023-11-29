function extract(nums) {
 
    let smallest = [];
    let sorted = nums.sort((a, b) => a - b);
    smallest.push(sorted[0], sorted[1]);

    console.log(smallest.join(' '));    

}