function marks(input) {


    let studentsAmount = Number(input[0]);
    let m1 = 0;
    let m2 = 0;
    let m3 = 0;
    let m4 = 0;

    let marksSum = 0;


    for (let i = 1; i <= studentsAmount; i++) {

        let mark = Number(input[i]);

        if (mark >= 2 && mark <= 2.99) {
            m1++
            marksSum += mark;
        } else if (mark <= 3.99) {
            m2++
            marksSum += mark;
        } else if (mark <= 4.99) {
            m3++
            marksSum += mark;
        } else if (mark >= 5) {
            m4++
            marksSum += mark;
        }

    }

    let pM1 = (m1 / studentsAmount) * 100;
    let pM2 = (m2 / studentsAmount) * 100;
    let pM3 = (m3 / studentsAmount) * 100;
    let pM4 = (m4 / studentsAmount) * 100;

    let averageMark = marksSum / studentsAmount

    
    console.log(`Top students: ${pM4.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${pM3.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${pM2.toFixed(2)}%`);
    console.log(`Fail: ${pM1.toFixed(2)}%`);
    console.log(`Average: ${averageMark.toFixed(2)}`);


}
marks(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
]);
