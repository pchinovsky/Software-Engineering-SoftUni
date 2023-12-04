function square(size) {
 
    if (size === undefined) {

        for (let i = 1; i <= 5; i++) {
            let line = '* '.repeat(5);
            console.log(line);
        }

    } else {

        for (let i = 1; i <= size; i++) {
            let line = '* '.repeat(size);
            console.log(line);
        }
    }
 
}