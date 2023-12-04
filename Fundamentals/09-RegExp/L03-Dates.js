function date(input) {

    let regex = /\d{2}([.\-\/])[A-Z][a-z]{2}\1\d{4}/g;
    let dates = input[0];
    let valid = dates.match(regex);

    for (const date of valid) {
        let regex = /[.\-\/]/g;
        let [day, month, year] = date.split(regex);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

}