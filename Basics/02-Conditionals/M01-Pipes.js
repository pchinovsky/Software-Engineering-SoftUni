function pool(input) {

    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);


    let waterVolP1 = P1 * H;
    let waterVolP2 = P2 * H;

    let totalVol = waterVolP1 + waterVolP2;

    let diff = Math.abs(V - totalVol);

    let percent = (totalVol / V) * 100;
    let percentP1 = (waterVolP1 / totalVol) * 100;
    let percentP2 = (waterVolP2 / totalVol) * 100;


    if (totalVol <= V) {

        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);

    } else if (totalVol > V) {

        console.log(`For ${H} hours the pool overflows with ${diff.toFixed(2)} liters.`);
        
    }


}
pool(["1000", "100", "120", "3"])