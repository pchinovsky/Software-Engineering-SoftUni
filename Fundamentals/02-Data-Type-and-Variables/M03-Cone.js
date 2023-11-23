function cone(r, h) {

  let vol = (Math.PI * Math.pow(r, 2) * h) / 3;
  let s = Math.pow(r, 2) + Math.pow(h, 2);
  let L = Math.sqrt(s);

  let area = (Math.PI * Math.pow(r, 2)) + (Math.PI * r * L);

  console.log(`volume = ${vol.toFixed(4)}`)
  console.log(`area = ${area.toFixed(4)}`)

}
