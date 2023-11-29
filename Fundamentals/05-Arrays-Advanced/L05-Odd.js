function process(nums) {
 
    let odd = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (i % 2 !== 0) {
            odd.unshift(num * 2);
        }
     
    }

    console.log(odd.join(' '));
 
}