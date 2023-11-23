function nums(num) {

  let numString = String(num);
  let sum = 0;

  for (let i = 0; i < numString.length; i++) {

    let digit = Number(numString[i]);

    sum += digit;

  }

  let replace = /9/g;
  let sumNew = String(sum).replace(replace, "0");

  if (sum === Number(sumNew)) {
    console.log(`${num} Amazing? False`)
  } else {
    console.log(`${num} Amazing? True`)
  }

}
