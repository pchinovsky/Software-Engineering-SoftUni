function sum(n) {


    let count = 0;
    let num = 1;
    let sum = 0;

    while (count !== n) {

        if (num % 2 !== 0) {

            console.log(num);
            count++
            sum += num;

        }

        num++

    }

    console.log(`Sum: ${sum}`);

}
