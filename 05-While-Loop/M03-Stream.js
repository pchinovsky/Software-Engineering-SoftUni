function letters(input) {


    let word = "";
    let word2 = "";

    let os = 0;
    let cs = 0;
    let ns = 0;

    let i = 0;
    let com = input[i];

    while (com !== "End") {

        let char = input[i];

        switch (char) {

            case "o":
                os++
                if (os === 2) {
                    word2 += char;
                }
                break;

            case "c":
                cs++
                if (cs === 2) {
                    word2 += char;

                }
                break;

            case "n":
                ns++
                if (ns === 2) {
                    word2 += char;

                }
                break;

            default:
                if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                    word2 += char;
                }

        }

        if (os >= 1 && cs >= 1 && ns >= 1) {

            word2 += " ";
            os = 0;
            cs = 0;
            ns = 0;

        }

        if (word2[word2.length - 1] === " ") {

            word = word2;

        }

        i++
        com = input[i];

    }

    if (com === "End") {

        console.log(word);

    }


}
