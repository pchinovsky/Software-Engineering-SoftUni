function build(input) {


    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    let roomsFloor = "";

    for (let i = floors; i >= 1; i--) {

        roomsFloor = "";

        for (let u = 0; u < rooms; u++) {

            if (i === floors) {

                roomsFloor += "L" + i + u + " ";

            } else if (i % 2 === 0) {

                roomsFloor += "O" + i + u + " ";

            } else {

                roomsFloor += "A" + i + u + " ";

            }

        }

        console.log(roomsFloor);

    }


}

