function convert(firstName, lastName, hairColor) {
 
    let object = {firstName, lastName, hairColor};

    return JSON.stringify(object);
    
}