function match(one, two, three) {

    let newWord = "";

    for (let i = 0; i < one.length; i++) {

        let letter = one[i];

        if (letter === "_") {
            newWord += two;
        } else {
            newWord += letter;
        }

    }

    if (newWord === three) {
        console.log("Matched");
    } else {
        console.log("Not matched");
    }

}
