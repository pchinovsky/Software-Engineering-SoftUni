function bugPositions(arr) {

    let field = arr[0];

    let bugs = arr[1].split(" ");
    let positions = [];

    for (let i = 1; i <= field; i++) {
        positions.push(0);
    }

    for (let i = 0; i < bugs.length; i++) {

        let bugPos = Number(bugs[i]);

        if (bugPos >= 0 && bugPos < field) {
            positions[bugPos] = 1;
        }

    }

    let bugPosA;

    for (let j = 2; j < arr.length; j++) {

        let com = arr[j].split(" ");
        let pos = Number(com[0]);
        let dir = com[1];
        let move = Number(com[2]);

        for (let i = 0; i < positions.length; i++) {

            bugPosA;

            if (positions[i] === 1) {
                bugPosA = i;
            }

            if (move < 0 && dir === "left") {
                dir = "right";
                move = Math.abs(move);
            } else if (move < 0 && dir === "right") {
                dir = "left";
                move = Math.abs(move);
            }

            if (pos === bugPosA) {

                positions[bugPosA] = 0;

                if (dir === "left") {

                    if (bugPosA - move >= 0) {

                        for (let k = Number(bugPosA - move); k >= 0; k -= move) {

                            let bugPosB = positions[k];

                            if (bugPosB === 0) {
                                positions[k] = 1;
                                bugPosA = k;
                                break;
                            }

                        }

                    }

                } else if (dir === "right") {

                    if (bugPosA + move < positions.length) {

                        for (let k = Number(bugPosA + move); k < positions.length; k += move) {

                            let bugPosB = positions[k];

                            if (bugPosB === 0) {
                                positions[k] = 1;
                                bugPosA = k;
                                break;
                            }

                        }

                    }

                }

            }

        }

    }

    console.log(positions.join(" "));

}
