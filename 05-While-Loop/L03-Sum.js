function sum(input) {


  let num = Number(input[0]);

  let index = 1;
  let n = Number(input[index]);
  let sum = 0;


  while (sum < num) {

    sum += n;
    index++
    n = Number(input[index]);

  }


  console.log(sum);


}
