function reverse(string) {

  let newString = "";

  for (i = string.length - 1; i >= 0; i--) {
    let letter = string[i];
    newString += letter;
  }

  console.log(newString);

}
