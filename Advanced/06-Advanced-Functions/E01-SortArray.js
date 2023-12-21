function sortArr(arr, com) {

    let coms = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }

    return arr.sort(coms[com]);
    
}
sortArr([14, 7, 17, 6, 8], 'asc')
