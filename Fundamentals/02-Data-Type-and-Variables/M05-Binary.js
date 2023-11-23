function sum(n) {

  let sum = 0;
  let pow = 0;

  for (let i = n.length - 1; i >= 0; i--) {

    let dig = Number(n[i]);
    sum += dig * (Math.pow(2, pow));
    pow++

  }

  console.log(sum);

}
