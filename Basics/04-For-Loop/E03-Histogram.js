function histo(input) {


    let num = Number(input[0]);

    c1 = 0;
    c2 = 0;
    c3 = 0;
    c4 = 0;
    c5 = 0;

    for (let i = 1; i < input.length; i++) {

        let n = input[i];

        if (n < 200) {
            c1++
        } else if (n <= 399) {
            c2++
        } else if (n <= 599) {
            c3++
        } else if (n <= 799) {
            c4++
        } else if (n >= 800) {
            c5++
        }

    }

    let p1 = (c1 / num) * 100;
    let p2 = (c2 / num) * 100;
    let p3 = (c3 / num) * 100;
    let p4 = (c4 / num) * 100;
    let p5 = (c5 / num) * 100;

    
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);


}
//histo(["3", "1", "2", "999"]);
histo(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"])

