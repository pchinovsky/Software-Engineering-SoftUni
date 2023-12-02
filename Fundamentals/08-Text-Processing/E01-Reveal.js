function reveal(str, str1) {

    let words = str.split(', ');
    let templates = str1.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        for (let j = 0; j < templates.length; j++) {
            let template = templates[j];

            if (template[0] === "*" && template.length === word.length) {
                templates[j] = word;
            }
        }
    }

    console.log(templates.join(' '));

}