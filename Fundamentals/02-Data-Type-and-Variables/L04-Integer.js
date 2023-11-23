function integerOrFloat(n1, n2, n3) {

  let sum = n1 + n2 + n3;

  let check = Math.trunc(sum);

  if (sum === check) {
    console.log(`${sum} - Integer`)
  } else {
    console.log(`${sum} - Float`)
  }

}
