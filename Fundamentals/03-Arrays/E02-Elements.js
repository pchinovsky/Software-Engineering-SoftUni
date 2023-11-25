function common(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {

    for (let b = 0; b < arr2.length; b++)

      if (arr1[i] === arr2[b]) {
        console.log(arr1[i]);
      }

  }

}
