function listResources(input) {
 
    let list = {};

    for (let i = 0; i < input.length; i += 2) {    
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if (!(list.hasOwnProperty(resource))) {
            list[resource] = qty;
        } else {
            list[resource] += qty;
        }
        
    }

    for (const resource in list) {
        console.log(`${resource} -> ${list[resource]}`);
    }
 
}