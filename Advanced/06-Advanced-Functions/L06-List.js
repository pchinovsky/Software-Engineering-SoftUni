function process(input) {

    let collection = [];

    let functions = {
        add: (str) => collection.push(str),
        remove: (str) => {
            while (collection.includes(str)) {
                let ind = collection.indexOf(str);
                collection.splice(ind, 1);
            }
        },
        print: () => console.log(collection.join(','))
    }

    for (const com of input) {

        if (com.includes('add')) {
            let [oper, str] = com.split(' ');
            functions[oper](str);
        } else if (com.includes('remove')) {
            let [oper, str] = com.split(' ');
            functions[oper](str);
        } else {
            functions.print();
        }

    }

}