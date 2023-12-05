function rearrange(nums) {
 
    let rearranged = [];

    for (const num of nums) {
       
        if (num < 0) {
            rearranged.unshift(num);
        } else {
            rearranged.push(num);
        }
    }
 
    console.log(rearranged.join('\n'));
    
}