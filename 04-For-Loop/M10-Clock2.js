function clock() {


    let hour = 0;
    let min = 0;
    let sec = 0;


    for (let i = 0; i < 24; i++) {

        for (let m = 0; m < 60; m++) {

            for (let s = 0; s < 60; s++) {

                console.log(`${hour} : ${min} : ${sec}`);
                sec++

            }

            min++

            if (sec = 60) {
                sec = 0;
            }

        }

        hour++

        if (min = 60) {
            min = 0;
        }

    }


}
clock();