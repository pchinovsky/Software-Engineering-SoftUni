function pairs(input) {
  // wrote it myself based on what I saw from Victoria in chat and softuni mentor solution.

  let pairs = Number(input[0]);

  let currentSum = 0;
  let lastSum = 0;

  let maxDiff = 0;


  for (let i = 1; i < pairs * 2; i += 2) {

    currentSum = Number(input[i]) + Number(input[i + 1]);

    if (i > 1) {
      // otherwise there won't be a last sum.
      let diff = Math.abs(currentSum - lastSum);

      if (diff > maxDiff) {
        maxDiff = diff;
      }

    }

    lastSum = currentSum;
    // comparison happens here, based on current and last sum, each iteration updating
    // the last sum to take the value of the current, so next current will be compared to the
    // previous sum. 
    // smth similar happens to maxDiff. 

  }

  if (maxDiff === 0) {

    console.log(`Yes, value=${lastSum}`);

  } else {

    console.log(`No, maxdiff=${maxdiff}`)

  }

  
}
pairs(["3", "1", "2", "0", "3", "4", "-1"]);






