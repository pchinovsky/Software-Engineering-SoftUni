function party(input) {

    let going = [];

    for (const com of input) {
        let [name] = com.split(' ');

        if (going.includes(name)) {

            if (com.includes("not")) {
                let index = going.indexOf(name);
                going.splice(index, 1);
            } else {
                console.log(`${name} is already in the list!`);
            }

        } else {

            if (com.includes("not")) {
                console.log(`${name} is not in the list!`);
            } else {
                going.push(name);
            }

        }

    }

    console.log(going.join('\n'));

}