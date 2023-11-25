function revArray(arr) {

    function swap(arr, i, j) {

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - i - 1);
    }

    console.log(arr.join(' '));

}
