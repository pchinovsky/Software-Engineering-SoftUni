class Hex {
    constructor(value) {
        this.value = value
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }
    plus(num) {
        let val = num instanceof Hex ? num.valueOf() : num;
        let newVal = this.value + val;
        return new Hex(newVal);
    }
    minus(num) {
        let val = num instanceof Hex ? num.valueOf() : num;
        let newVal = this.value - val;
        return new Hex(newVal);
    }
    parse(hex) {
        hex = hex.replace(/^0x/i, '');
        let dec = parseInt(hex, 16);
        return new Hex(dec);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
