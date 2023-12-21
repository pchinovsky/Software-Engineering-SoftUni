function sum(a) {

    let internal = a;

    function add(b) {
        internal += b;
        return add;
    }

    add.toString = function() {
        return internal;
    }
    return add;

}

let add = sum(0)
console.log(add(1)(6)(-3).toString());






