function charRange(char1, char2) {

   let code1 = char1.charCodeAt(0);
   let code2 = char2.charCodeAt(0);
   let start = 0;
   let end = 0;

   if (code1 > code2) {
      start = code2;
      end = code1;
   } else {
      start = code1;
      end = code2;
   }

   let str = "";

   for (let i = start + 1; i <= end - 1; i++) {
      let sign = String.fromCharCode(i);
      str += sign + " ";
   }

   console.log(str);

}
