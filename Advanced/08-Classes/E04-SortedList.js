class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(el) {
        this.size++
        this.collection.push(el);
        this.collection.sort((a, b) => a - b);
    }
    remove(i) {
        if (!(i < 0 || i > this.collection.length - 1)) {
            this.size--
            this.collection.splice(i, 1);
            this.collection.sort((a, b) => a - b);
        }
    }
    get(i) {
        if (!(i < 0 || i > this.collection.length - 1)) return this.collection[i];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
