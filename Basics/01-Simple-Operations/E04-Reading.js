function readingSpeed(input) {

    let bookPages = Number(input[0]);
    let readingSpeed = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursBook = bookPages / readingSpeed
    let hoursDaily = hoursBook / daysToRead

    console.log(hoursDaily);

}
readingSpeed(["100", "8", "3"]);
