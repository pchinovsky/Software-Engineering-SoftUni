function match(input) {
    
    let count = {};
    let words = input[0].split(' ');

    for (const word of words) {
        count[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        let word = input[i];

        if (count.hasOwnProperty(word)) {
            count[word] ++
        }
       
    }

    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);

    for (const entry of sorted) {
        console.log(`${entry[0]} - ${entry[1]}`);
    }

}