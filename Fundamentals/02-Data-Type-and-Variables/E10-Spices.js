function yeild(startYield) {

  let gain = 0;
  let days = 0;

  for (let i = startYield; i >= 100; i -= 10) {

    let mined = i;
    gain += mined;
    days++
    gain -= 26;

  }

  if (gain >= 26) {
    gain -= 26;
  } else {
    gain = 0;
  }

  console.log(days);
  console.log(gain);

}
