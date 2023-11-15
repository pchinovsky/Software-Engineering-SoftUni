function maxNum(input) {


  let n = Number(input[0]);
  let i = 1;
  let data = input[i];


  while (data !== "Stop") {

    data = Number(data);

    if (data > n) {

      n = data;

    }

    i++
    data = input[i];

  }


  console.log(n);


}
