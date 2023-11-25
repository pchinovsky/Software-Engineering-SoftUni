function reverse(n, nums) {

    let next = nums.slice(0, n);
    let next1 = "";

    for (let i = next.length - 1; i >= 0; i--) {
        let num = next[i];
        next1 += String(num) + " ";
    }

    console.log(next1);

}
