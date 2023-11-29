function uniqueNumbers(nums) {
    let unique = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (unique.includes(num)) {
            continue;
        } else {
            unique.push(num);
        }

    }

    console.log(unique.join(' '));

}
