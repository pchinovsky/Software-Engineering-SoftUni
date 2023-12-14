function createPerson(firstName, lastName) {

    let person = {
        firstName,
        lastName
    };

    Object.defineProperty(person, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(full) {
            let [firstName, lastName] = full.split(' ');
            this.firstName = firstName,
            this.lastName = lastName
        }
    });

    return person;

}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
