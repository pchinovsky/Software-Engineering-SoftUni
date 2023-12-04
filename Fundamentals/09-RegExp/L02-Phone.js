function validatePhoneNumber(input) {

    let regex = /[\s\+]359([\s-])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let valid = input[0].match(regex);
    
    console.log(valid.join(', '));

}