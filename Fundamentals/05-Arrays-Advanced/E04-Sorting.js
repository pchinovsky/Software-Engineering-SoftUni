function sort(nums) {

    let sorted = nums.sort((a, b) => b - a);
    let ordered = [];

    while (sorted.length > 0) {
        let max = sorted.shift();
        let min = sorted.pop();
        ordered.push(max);
        ordered.push(min);
    }

    console.log(ordered.join(' '));

}
