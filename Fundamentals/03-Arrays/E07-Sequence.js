function sequence(arr) {

    let seq = [];
    let seqPot = [];

    let prevNum = arr[0];

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i];

        if (i === 0) {
            seqPot.push(num);
            seq.push(num);
        }

        if (i > 0) {

            if (num === prevNum) {

                seqPot.push(num);

                if (i === arr.length - 1 && seqPot.length > seq.length) {
                    seq = [...seqPot];
                }

            }

            if (num !== prevNum) {

                if (seqPot.length > seq.length) {
                    seq = [...seqPot];
                    seqPot.length = 0;
                    seqPot.push(num);
                } else {
                    seqPot.length = 0;
                    seqPot.push(num);
                }

            }

            prevNum = num;

        }

    }

    console.log(seq.join(" "));

}
