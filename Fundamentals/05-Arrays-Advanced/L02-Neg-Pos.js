function rearrange(arr) {
 
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num >= 0) {
            arr2.push(num);
        } else {
            arr2.unshift(num);
        }
     
    }
 
    console.log(arr2.join('\n'));

};