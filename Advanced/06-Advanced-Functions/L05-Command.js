function solution() {

    let internalStr = '';
    
    return {
        
    append: function (str) {
        internalStr += str;
    }, 

    removeStart: function (n) {
        let newStr = internalStr.substring(n);
        internalStr = newStr;
    }, 

    removeEnd: function (n) {
        let newStr = internalStr.substring(0, internalStr.length - n);
        internalStr = newStr;
    }, 

    print: function () {
        console.log(internalStr);
    }

}

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
