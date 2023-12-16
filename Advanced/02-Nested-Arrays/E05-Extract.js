function extractSubset(arr) {

    let max = Number.MIN_SAFE_INTEGER;
    let processed = [];
    
    for (const el of arr) {
        if (el >= max) {
            processed.push(el);
            max = el;
        }
    }

    return processed;

}