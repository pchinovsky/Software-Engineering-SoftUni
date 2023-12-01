function averageGrade(input) {

    let students = {};

    for (const entry of input) {
        let student = entry.split(' ');
        let name = student.shift();
        student = student.map(Number);
        let props = {};

        if (students.hasOwnProperty(name)) {

            for (let i = 0; i < student.length; i++) {
                let grade = student[i];
                students[name]['grades'].push(grade);
                let studentGrades = students[name]['grades'];
                students[name]['avgGrade'] = ((studentGrades.reduce((acc, val) => acc + val)) / studentGrades.length).toFixed(2);
            }

        } else {
            props['grades'] = student;
            students[name] = props;
            let studentGrades = students[name]['grades'];
            props['avgGrade'] = ((studentGrades.reduce((acc, val) => acc + val)) / studentGrades.length).toFixed(2);
        }

    }

    let sorted = Object.keys(students).sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {    
        console.log(`${key}: ${students[key]['avgGrade']}`);
    }

}