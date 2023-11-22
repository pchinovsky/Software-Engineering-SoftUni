function determine(age) {


    let person = "";

    if (age < 0) {

        console.log("out of bounds");

    } else if (age >= 0 && age <= 2) {
        
        person = "baby";

    } else if (age > 2 && age <= 13) {

        person = "child";

    } else if (age > 13 && age <= 19) {

        person = "teenager";

    } else if (age > 19 && age <= 65) {

        person = "adult";

    } else if (age > 65) {

        person = "elder";

    }

    console.log(person);


}
