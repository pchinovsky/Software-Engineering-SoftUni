function book(input) {


    let book = input[0];

    let i = 1;
    let com = input[i];

    let counter = 0;

    while (com !== "No More Books") {

        if (com === book) {

            console.log(`You checked ${counter} books and found it.`);
            break;

        }

        counter++;

        i++;
        com = input[i];

    }

    if (com === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);

    }


}
