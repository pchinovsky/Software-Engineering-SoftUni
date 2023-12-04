function match(text) {    

    let regex = /\b([A-Z][a-z]+) ([A-Z][a-z]+)\b/g;
    let valid = text.match(regex);

    console.log(valid.join(' '));

}