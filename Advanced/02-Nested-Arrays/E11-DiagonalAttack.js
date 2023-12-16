function equalDiagonals(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let d1 = matrix.map((row, i) => row[i]).reduce((acc, val) => acc + val);
    let d2 = matrix.map((row, i) => row[row.length - i - 1]).reduce((acc, val) => acc + val);

    if (d1 === d2) {

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let d1Current = i;
            let d2Current = row.length - (1 + i);

            for (let j = 0; j < row.length; j++) {

                if (j !== d1Current && j !== d2Current) {
                    row[j] = d1;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
    
}