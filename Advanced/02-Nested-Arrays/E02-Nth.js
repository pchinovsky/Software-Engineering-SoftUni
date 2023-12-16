function printNth(arr, n) {

    const els = [arr[0]];
    arr.forEach((el, i) => { if (i % n === 0 && i !== 0) els.push(el) });

    return els;
    
}