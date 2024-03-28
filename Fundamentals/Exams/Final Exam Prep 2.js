function ops(input) {
    input.shift();
    const reg = /@[#]+[A-Z][0-9A-Za-z]{4,}[A-Z]@[#]+/;

    input.forEach(line => {
        const match = line.match(reg);

        if (match) {        
            const group = match[0].match(/\d+/g) ? match[0].match(/\d+/g).join('') : '00';
            console.log(`Product group: ${group}`);
        } else {
            console.log(`Invalid barcode`);
        }
    })

}
ops(["6",

"@###Val1d1teM@###",

"@#ValidIteM@#",

"##InvaliDiteM##",

"@InvalidIteM@",

"@#Invalid_IteM@#",

"@#ValiditeM@#"])