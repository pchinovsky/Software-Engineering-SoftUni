function printTriangle(n) {


    let string = "";
    let num = 1;
    let count = 0;

    for (let i = 1; i <= n; i++) {

        string = num + " ";

        count = 0;

        for (let b = 1; b < num; b++) {

            string += num + " ";

        }

        console.log(string);

        num++

    }

}
