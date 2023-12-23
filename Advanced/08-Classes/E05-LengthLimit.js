class Stringer {
    constructor(innerString, innerLength) {
        Object.assign(this, {
            innerString,
            innerLength
        })
    }
    increase(length) {
        return this.innerLength = Math.max(0, this.innerLength + length);
    }
    decrease(length) {
        return this.innerLength = Math.max(0, this.innerLength - length);
    }
    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...'
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
console.log(test.innerLength);

test.decrease(3);
console.log(test.toString());
console.log(test.innerLength); // Te...

test.decrease(5);
console.log(test.toString());
console.log(test.innerLength); // ...

test.increase(4);
console.log(test.toString());
console.log(test.innerLength);// Test
