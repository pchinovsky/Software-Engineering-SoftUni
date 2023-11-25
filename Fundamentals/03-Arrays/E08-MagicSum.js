function magic(arr, n) {

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i];

        for (let j = i + 1; j < arr.length; j++) {

            let num2 = arr[j];

            if (num + num2 === n) {
                console.log(num, num2);
            }

        }

    }

}



