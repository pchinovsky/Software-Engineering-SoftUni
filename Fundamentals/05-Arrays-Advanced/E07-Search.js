function search(nums, edits) {

    let [remove, del, find] = edits;
    nums.splice(remove)
    nums.splice(0, del)
    let found = nums.filter((el) => el === find);

    console.log(`Number ${find} occurs ${found.length} times.`);

}
