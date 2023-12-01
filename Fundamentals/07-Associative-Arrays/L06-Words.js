function count(input) {
 
    let words = {};

    for (const word of input) {
    
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word] += 1;
        }

    }

    let sortedValues = Object.entries(words).sort((a, b) => b[1] - a[1]);
    let sortedObject = {};

    for (const entry of sortedValues) {
        let [word, count] = entry;
        sortedObject[word] = count;
        console.log(`${word} -> ${sortedObject[word]} times`);
    }

}