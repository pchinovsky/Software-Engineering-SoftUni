function findEvenPos(arr) {
 
    let even = arr.filter((el, index) => index % 2 === 0);
    console.log(even.join(' '));

}