function createClass(cat) {
 
    class Cat {

        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
        
    }

    for (let i = 0; i < cat.length; i++) {
        let currCat = cat[i];
        let parameters = currCat.split(' ');
        let [name, age]  = parameters;
        let newCat = new Cat(name, age);
        newCat.meow();
        console.log(newCat);
    }

}