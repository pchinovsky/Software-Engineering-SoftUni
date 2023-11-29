function sequence(n, k) {

    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let kNums = sequence.slice(Math.max(0, sequence.length - k,));
        let num = kNums.reduce((acc, val) => acc + val);
        sequence.push(num);
    }

    console.log(sequence.join(' '));

}