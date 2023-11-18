function trainers(input) {


    let juries = Number(input[0]);

    let presentationSum = 0;

    let gradesAll = 0;
    let gradesCount = 0;

    let i = 1;
    let com = input[i];

    while (com !== "Finish") {

        let presentationName = com;

        presentationSum = 0;
        i++

        for (let c = 0; c < juries; c++) {

            let grade = Number(input[i]);

            i++

            gradesAll += grade;
            gradesCount++

            presentationSum += grade;

        }

        let avgGrade = presentationSum / juries;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        com = input[i];

    }

    let finalGrade = gradesAll / gradesCount;

    if (com === "Finish") {

        console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);

    }


}
