function rotate(arr, rot) {

   for (let i = 0; i <= rot - 1; i++) {
      let removed = arr.shift();
      arr.push(removed);
   }

   console.log(arr.join(" "));

}
