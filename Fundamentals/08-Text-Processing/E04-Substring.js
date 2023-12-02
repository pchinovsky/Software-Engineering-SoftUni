function match(word, text) {
 
    let wordLow = word.toLowerCase();
    let textLow = text.split(' ').map(el => el.toLowerCase());

    if (textLow.includes(wordLow)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
 
}