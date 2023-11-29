function detonate(nums, bombs) {

    let [bomb, power] = bombs;

    while (nums.includes(bomb)) {
        let index = nums.indexOf(bomb);

        if (index - power < 0) {
            nums.splice(0, (power * 2 + 1) + (index - power));
        } else {
            nums.splice(index - power, power * 2 + 1);
        }

    }
    
    if (nums.length === 0) {
        console.log(0);
    } else {
        console.log(nums.reduce((acc, val) => acc + val));
    }

}
