function minNum(input) {


    let num = Number(input[0]);

    let i = 1;
    let n = input[i];

    while (n !== "Stop") {

        n = Number(n);

        if (n < num) {

            num = n;
        }

        i++
        n = input[i];

    }


    console.log(num);


}
