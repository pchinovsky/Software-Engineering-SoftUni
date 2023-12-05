function findPairs(matrix) {
 
    let pairs = 0;
    let prevArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];

        for (let j = 0; j < arr.length; j++) {
            let el = arr[j];
         
            if (el === arr[j - 1]) {
                pairs ++
            }

            if (el === prevArr[j]) {
                pairs ++
            }

        }
     
        prevArr.length = 0;
        prevArr.push(...arr);
     
    }

    return pairs
    
}