function palindromeCheck(arr) {

     for (let i = 0; i < arr.length; i++) {
          let num = String(arr[i]);
          let rev = Number(num
               .split('')
               .reverse()
               .join(''));

          if (rev === arr[i]) {
               console.log("true");
          } else {
               console.log("false");
          }

     }

}
