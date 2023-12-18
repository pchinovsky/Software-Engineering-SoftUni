function createSortedList() {

    let obj = {
        collection: [],
        add: function (el) {
            this.size++
            this.collection.push(el);
            this.collection.sort((a, b) => a - b);
        },
        remove: function (i) {
            if (!(i < 0 || i > this.collection.length - 1)) {
                this.size--
                this.collection.splice(i, 1);
                this.collection.sort((a, b) => a - b);
            }
        },
        get: function (i) {
            if (!(i < 0 || i > this.collection.length - 1)) return this.collection[i];
        },
        size: 0
    }

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
