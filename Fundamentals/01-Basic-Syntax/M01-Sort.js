function get(n1, n2, n3) {

  let nums = [n1, n2, n3];

  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  for (i = 0; i <= 2; i++) {

    let num = Number(nums[i]);

    if (i === 0) {
      num1 = num;
    }

    if (i === 1) {
      if (num > num1) {
        num2 = num1;
        num1 = num;
      } else {
        num2 = num;
      }
    }

    if (i === 2) {
      if (num > num1) {
        num3 = num2;
        num2 = num1;
        num1 = num;
      }
      if (num > num2 && num < num1) {
        num3 = num2;
        num2 = num;
      }

      if (num < num1 && num < num2) {
        num3 = num;
      }

      if (num < num1 && (num === n2 || num === n1)) {
        num3 = num;
      }
    }
  }

  console.log(num1);
  console.log(num2);
  console.log(num3);

}
