function condense(arr) {

    let i = 0;

    while (arr.length !== 1) {

        arr[i] = arr[i] + arr[i + 1];

        if (i === arr.length - 2) {
            arr.length -= 1;
        }

        i++

        if (i === arr.length) {
            i = 0;
        }

    }

    console.log(arr[0]);

}

