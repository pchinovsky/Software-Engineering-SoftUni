function listEmployees(input) {

    let employees = {};

    for (const person of input) {
        let [company, id] = person.split(' -> ');

        if (!employees.hasOwnProperty(company)) {
            employees[company] = [];
        }

        if (!(employees[company].includes(`-- ${id}`))) {
            employees[company].push(`-- ${id}`);
        }

    }

    let sorted = Object.keys(employees).sort();

    for (const company of sorted) {
        console.log(company);
        console.log(employees[company].join('\n'));
    }

}