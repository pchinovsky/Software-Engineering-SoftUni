function sum(m, n) {


   let nums = "";

   let sum = 0;

   while (m <= n) {

      nums += m + " ";

      sum += m;

      m++

   }

   console.log(nums);
   console.log(`Sum: ${sum}`);

}
