function rotations(band, album, song) {

  let dur = (album.length * band.length) * song.length / 2.

  let rotated = Math.ceil(dur / 2.5);

  console.log(`The plate was rotated ${rotated} times.`)

}
