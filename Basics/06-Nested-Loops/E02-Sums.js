function sums(input) {


    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let string = "";

    let even = 0;
    let odd = 0;

    for (let i = n1; i <= n2; i++) {

        even = 0;
        odd = 0;

        let num = String(i);

        for (let u = 0; u < num.length; u++) {

            let digit = Number(num[u]);

            if ((u + 1) % 2 === 0) {

                even += digit;

            } else {

                odd += digit;

            }
        }

        if (even === odd) {

            string += num + " ";

        }
    
    }

    console.log(string);


}
