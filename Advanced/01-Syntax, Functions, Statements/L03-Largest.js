function findMax(n1, n2, n3) {
 
    let nums = [n1, n2, n3];
    let max = n1;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > max) max = nums[i];
    }

    console.log(`The largest number is ${max}.`);
 
}