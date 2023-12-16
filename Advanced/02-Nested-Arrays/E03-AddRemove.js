function addOrRemove(coms) {

    let num = 1;
    let arr = [];

    for (const com of coms) {
        com === 'add' ? arr.push(num) : arr.pop();
        num++;
    }

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }

}