function football(input) {


    let stadiumfull = Number(input[0]);
    let fans = Number(input[1]);

    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;


    for (let i = 2; i <= input.length; i++) {

        let sector = input[i];

        switch (sector) {
            case "A":
                a++
                break;

            case "B":
                b++
                break;

            case "V":
                v++
                break;

            case "G":
                g++
                break;

        }

    }

    let pA = (a / fans) * 100;
    let pB = (b / fans) * 100;
    let pV = (v / fans) * 100;
    let pG = (g / fans) * 100;

    let pAll = (fans / stadiumfull) * 100;


    console.log(`${pA.toFixed(2)}%`);
    console.log(`${pB.toFixed(2)}%`);
    console.log(`${pV.toFixed(2)}%`);
    console.log(`${pG.toFixed(2)}%`);
    console.log(`${pAll.toFixed(2)}%`);
    

}
football(["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
]);
