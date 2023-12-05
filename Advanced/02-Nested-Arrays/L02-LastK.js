function lastK(n, k) {

    let seq = [1];

    for (let i = 1; i < n; i++) {
        let sum = seq
            .slice(- k)            
            .reduce((acc, val) => acc + val);
        seq.push(sum);
    }

    return seq

}