function convert(char) {

   let code = char.charCodeAt(0)

   if (code >= 65 && code <= 90) {
      console.log("upper-case");
   } else if (code >= 97 && code <= 122) {
      console.log("lower-case");
   }

}
