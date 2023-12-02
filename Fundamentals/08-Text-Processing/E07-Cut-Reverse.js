function curAndReverse(str) {

    let word1 = str
        .substring(0, str.length / 2)
        .split('')
        .reverse()
        .join('');

    let word2 = str
        .substring(str.length / 2,)
        .split('')
        .reverse()
        .join('');

    console.log(word1);
    console.log(word2);

}