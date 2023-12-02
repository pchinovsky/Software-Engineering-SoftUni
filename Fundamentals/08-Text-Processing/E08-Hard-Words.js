function fillText(input) {

    let text = input[0].split(' ')
    let words = input[1];

    for (const word of words) {      
        let blank = '_'.repeat(word.length);

        for (i = 0; i < text.length; i++) {
            let word2 = text[i];

            if (word2.includes('_') && word2[word2.length - 1] !== '_') {
              
              if (blank.length + 1 === word2.length) {
                 text[i] = word2.replace(blank, word);
              }

            } else if (word2.includes('_')) {
              
              if (blank === word2) {
                 text[i] = word2.replace(blank, word);
              }
            
            }
        }
    }

    console.log(text.join(' '));

}