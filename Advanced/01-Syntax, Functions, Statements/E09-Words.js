function convertUpperCase(str) {
 
    let regex = /\w+/g;
    let words = str.match(regex).map(word => word.toUpperCase());

    console.log(words.join(', '));

}

