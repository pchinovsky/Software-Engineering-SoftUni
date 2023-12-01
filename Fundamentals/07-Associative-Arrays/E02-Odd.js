function odd(input) {
 
    let count = new Map();
    let elements = input.split(' ').map(el => el.toLowerCase());

    for (const el of elements) {
        
        if (count.has(el)) {
            let val = count.get(el)
            count.set(el, val + 1)
        } else {
            count.set(el, 1)
        }

    }

    let odd = [...count].filter(([key, val]) => {
        return val % 2 !== 0
    })

    let log = odd.map(([key, val]) => key).join(' ');
    
    console.log(log);
    
}