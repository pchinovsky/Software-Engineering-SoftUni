function findMax(input) {

    let max = Number.MIN_SAFE_INTEGER;

    for (const arr of input) {
        let tempMax = Math.max(...arr);
        
        if (tempMax > max) max = tempMax;
    }

    return max;

}