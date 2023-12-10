function filterEmployees(data, criteria) {

    let employees = JSON.parse(data);
    let [critKey, critVal] = criteria.split('-');
    let counter = 0;

    for (const employee of employees) {

        if (employee[critKey] === critVal) {
            console.log(`${counter}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`);
            counter++
        }
    }

}