function nums(num) {

  let sum = 0;

  for (let i = 1; i <= num; i++) {
    
    let n = String(i);

    sum = 0;

    if (n.length > 1) {

      for (let a = 0; a < n.length; a++) {

        let digit = Number(n[a]);
        sum += digit;

      }

      if (sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`)
      }

    } else {

      if (i === 5 || i === 7 || i === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`)
      }

    }

  }

}
