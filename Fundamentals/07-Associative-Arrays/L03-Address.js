function register(input) {
 
    let registry = {};

    for (const entry of input) {       
        let [name, address] = entry.split(':');
        registry[name] = address;
    }

    let sorted = Object.keys(registry).sort((a, b) => a.localeCompare(b));
    let sortedReg = {};

    for (const key of sorted) {
        sortedReg[key] = registry[key];
        console.log(`${key} -> ${sortedReg[key]}`);
    }

}