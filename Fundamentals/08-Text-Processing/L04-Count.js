function countStr(sentence, str) {
 
    let count = 0;
    let words = sentence.split(' ');

    for (let word of words) {
    
        if (word == str) {
            count++;
        }
    }

    console.log(count);
 
}