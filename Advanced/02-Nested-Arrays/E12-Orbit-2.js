function buildOrbits([width, height, x, y]) {
    
    let matrix = Array.from({length: height}, () => Array(width).fill(0));
    matrix[x][y] = 1;

    let num = 2;
    let range = 1;

    while (matrix.flat().includes(0)) {
        for (let i = Math.max(0, x - range); i <= Math.min(height - 1, x + range); i++) {
            for (let j = Math.max(0, y - range); j <= Math.min(width - 1, y + range); j++) {
                if (matrix[i][j] === 0) matrix[i][j] = num;
            }
        }

        num++;
        range++;
    }

    matrix.forEach(row => console.log(row.join(' ')));
}