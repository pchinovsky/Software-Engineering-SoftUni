function prime(n) {

  let isPrime = true;

  if (n > 2) {

    for (let d = 2; d < n; d++) {

      if (n % d === 0) {
        isPrime = false;
        break;
      }

    }

  }

  console.log(isPrime === true);

}
