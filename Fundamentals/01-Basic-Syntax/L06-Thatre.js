function calcPrice(day, age) {


    let ticket = "";

    if (age >= 0 && age <= 18) {

        switch (day) {

            case "Weekday":
                ticket = "12$";
                break;

            case "Weekend":
                ticket = "15$";
                break;

            case "Holiday":
                ticket = "5$";

                break;

        }

    } else if (age > 18 && age <= 64) {

        switch (day) {

            case "Weekday":
                ticket = "18$";
                break;

            case "Weekend":
                ticket = "20$";
                break;

            case "Holiday":
                ticket = "12$";

                break;

        }

    } else if (age > 64 && age <= 122) {

        switch (day) {

            case "Weekday":
                ticket = "12$";
                break;

            case "Weekend":
                ticket = "15$";
                break;

            case "Holiday":
                ticket = "10$";

                break;

        }

    } else {

        console.log(`Error!`);
    }

    console.log(ticket);

}
