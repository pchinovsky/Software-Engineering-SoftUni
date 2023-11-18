function title(input) {


    let age = Number(input[0]);
    let gender = input[1];


    switch (gender) {
        
        case "m":
            if (age < 16) {
                console.log("Master");
            } else if (age >= 16) {
                console.log("Mr.");
            }
            break;

        case "f":
            if (age < 16) {
                console.log("Miss");
            } else if (age >= 16) {
                console.log("Ms.");
            }
            break;

    }


}
title(["12", "f"]);
