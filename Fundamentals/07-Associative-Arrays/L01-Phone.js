function store(input) {

    let people = {};

    for (let i = 0; i < input.length; i++) {
        let person = input[i].split(' ');
        let [name, phone] = person;
        people[name] = phone;
    }

    for (const key in people) {
        console.log(`${key} -> ${people[key]}`);
    }
 
}