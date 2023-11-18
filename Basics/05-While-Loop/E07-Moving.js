function moving(input) {


    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let vol = width * length * height;

    let i = 3;
    let com = input[i];

    while (com !== "Done") {

        let boxes = Number(com);

        vol -= boxes;

        let diff = Math.abs(vol);

        if (vol <= 0) {

            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;

        }

        i++
        com = input[i];

    }

    if (vol >= 0) {

        console.log(`${vol} Cubic meters left.`);

    }


}
