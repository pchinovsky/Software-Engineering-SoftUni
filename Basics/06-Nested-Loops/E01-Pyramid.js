function pyramid(input) {

    let n = Number(input[0]);
    let print = "";

    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= n; rows++) {

        print = "";

        for (let cols = 1; cols <= rows; cols++) {

            if (current > n) {
                isBigger = true;

                break;

            }

            print += current + " ";
            current++
            // 2nd loop is what moves the number, rows or 1st loop has nothing to do with it. 
            // 1st loop only provides resetting of the print variable - the printed string, 
            // and the amount of rotations of the 2nd loop - one more every time.
            // in other words - the inner loop makes the string, the outer logs it. if you
            // log in the inner, it will break the string in several rows - according to the sequence
            // of its building.

            //console.log(print);


        }




        console.log(print);
        // still don't completely get why log in the 2nd loop made one more row. 
        // it's smth related to the cond <= rows in the 2nd loop, instead of <= 10, say.


        if (isBigger === true) {

            break;

        }

    }




}
pyramid(["7"]);