function combs(n) {

  const combs = Number(n);

  for (let a = 0; a < combs; a++) {

    let L1 = String.fromCharCode(97 + a);

    for (let b = 0; b < combs; b++) {

      let L2 = String.fromCharCode(97 + b);

      for (let c = 0; c < combs; c++) {

        let L3 = String.fromCharCode(97 + c);

        console.log(`${L1}${L2}${L3}`)

      }

    }

  }

}
