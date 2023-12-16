function rotate(arr, rotations) {
 
    let i = 0;

    while (i !== rotations) {
        arr.unshift(arr.pop());
        i++
    }

    console.log(arr.join(' '));
}