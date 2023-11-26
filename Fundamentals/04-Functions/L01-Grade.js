function gradeFormat(grade) {

   let mark = "";

   if (grade < 3) {
      mark = `Fail (2)`
   } else if (grade >= 3 && grade < 3.5) {
      mark = `Poor (${grade.toFixed(2)})`
   } else if (grade >= 3.5 && grade < 4.5) {
      mark = `Good (${grade.toFixed(2)})`
   } else if (grade >= 4.5 && grade < 5.5) {
      mark = `Very good (${grade.toFixed(2)})`
   } else if (grade >= 5.5) {
      mark = `Excellent (${grade.toFixed(2)})`
   }

   console.log(mark);

}
