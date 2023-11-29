function convert(str) {
 
    let object = JSON.parse(str);

    for (const key in object) {        
        console.log(`${key}: ${object[key]}`);
    }
 
}