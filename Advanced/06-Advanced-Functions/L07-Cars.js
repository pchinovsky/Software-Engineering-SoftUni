function processObjects(input) {

    let storage = {};

    let functions = {
        create: (name) => storage[name] = {},
        inherit: (name, parent) => {
            storage[name] = Object.create(storage[parent] || {});
        },
        set: (name, key, val) => {
            storage[name][key] = val;
        },
        print: (name) => {
            let print = [];

            for (const key in storage[name]) {
                print.push(`${key}:${storage[name][key]}`);
            }

            console.log(print.join(','));
        }
    }

    for (const com of input) {
        
        if (com.includes('inherit')) {
            let [, name, oper, parent] = com.split(' ');
            functions[oper](name, parent);
        } else if (com.includes('create')) {
            let [oper, name] = com.split(' ');
            functions[oper](name);
        } else if (com.includes('set')) {
            let [oper, name, key, val] = com.split(' ');
            functions[oper](name, key, val);
        } else {
            let [oper, name] = com.split(' ');
            functions[oper](name);
        }
    }

}