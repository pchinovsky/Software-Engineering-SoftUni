function checkLeapYear(year) {


    let leap = false;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {

        leap = true;

    }

    if (leap) {

        console.log("yes");

    } else {

        console.log("no");

    }

}
