function checkSame(num) {
    let str = String(num).split('').map(Number);
    let sum = str.reduce((acc, val) => acc + val);
    console.log(!(str.some(n => n !== str[0])))
    console.log(sum);

}