function isMagical(matrix) {
    
        let sum = matrix[0].reduce((acc, val) => acc + val);
        let magical = true;
    
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let sum1 = row.reduce((acc, val) => acc + val);
    
            if (sum !== sum1) {
                magical = false;
                break;
            }
    
            let sum2 = 0;
            matrix.map(el => sum2 += el[i]);
            console.log(sum2);
    
            if (sum !== sum2) {
                magical = false;
                break;
            }
        }
    
        return magical;
    
    }