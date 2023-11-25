function max(arr) {

    let tops = [];
    let top = true;

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i];
        top = true;

        for (let j = i + 1; j < arr.length; j++) {

            let num2 = arr[j];

            if (num2 >= num) {
                top = false;
                break;
            }

        }

        if (top === true) {
            tops.push(num);
        }

    }

    console.log(tops.join(" "));

}
