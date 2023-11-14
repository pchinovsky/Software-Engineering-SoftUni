function clock(input) {


    let hour = 0;
    let min = 0;


    for (let i = 0; i < 24; i++) {

        for (let m = 0; m < 60; m++) {

            console.log(`${hour}:${min}`);
            min++

        }

        hour++

        if (min = 60) {
            min = 0;
        }

    }


}
clock();