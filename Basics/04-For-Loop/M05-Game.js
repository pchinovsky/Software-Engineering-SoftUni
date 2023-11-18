function game(input) {


  let moves = Number(input[0]);

  let result = 0;

  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  let n4 = 0;
  let n5 = 0;
  let inv = 0;


  for (let i = 1; i <= moves; i++) {

    let num = Number(input[i]);

    if (num >= 0 && num <= 9) {
      result += num * 0.2;
      n1++
    } else if (num >= 10 && num <= 19) {
      result += num * 0.3;
      n2++
    } else if (num >= 20 && num <= 29) {
      result += num * 0.4;
      n3++
    } else if (num >= 30 && num <= 39) {
      result += 50;
      n4++
    } else if (num >= 40 && num <= 50) {
      result += 100
      n5++
    } else if (num < 0 || num > 50) {
      result /= 2;
      inv++
    }

  }

  let pN1 = (n1 / moves) * 100;
  let pN2 = (n2 / moves) * 100;
  let pN3 = (n3 / moves) * 100;
  let pN4 = (n4 / moves) * 100;
  let pN5 = (n5 / moves) * 100;
  let pInv = (inv / moves) * 100;


  console.log(`${result.toFixed(2)}`);
  console.log(`From 0 to 9: ${pN1.toFixed(2)}%`);
  console.log(`From 10 to 19: ${pN2.toFixed(2)}%`);
  console.log(`From 20 to 29: ${pN3.toFixed(2)}%`);
  console.log(`From 30 to 39: ${pN4.toFixed(2)}%`);
  console.log(`From 40 to 50: ${pN5.toFixed(2)}%`);
  console.log(`Invalid numbers: ${pInv.toFixed(2)}%`);
  

}
game(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])