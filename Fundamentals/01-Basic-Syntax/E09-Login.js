function checkLogin(input) {


    let user = input[0];
    let pass = "";
    let yes = false;
    let blocked = false;

    for (let i = user.length - 1; i >= 0; i--) {

        let letter = user[i];

        pass += letter;

    }

    let counter = 0;

    for (let i = 1; i < input.length; i++) {

        let com = input[i];

        counter++;

        if (com === pass) {

            yes = true;
            break;

        } else {

            if (counter === 4) {

                blocked = true;
                break;

            } else {

                console.log(`Incorrect password. Try again.`);

            }

        }

    }

    if (yes === true) {

        console.log(`User ${user} logged in.`);

    }

    if (blocked === true) {

        console.log(`User ${user} blocked!`);

    }

}
