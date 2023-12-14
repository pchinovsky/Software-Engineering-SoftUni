function extendPrototype(classToExtend) {

    let props = {
        species: 'Human',
        toSpeciesString() {
            return `I am a ${this.species}. ${this.toString()}`
        }
    }
    
    Object.assign(classToExtend.prototype, props);
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

extendPrototype(Person);
let pesho = new Person("Pesho", "email@hit.bg");
console.log(pesho.species);
console.log(pesho.toSpeciesString());



