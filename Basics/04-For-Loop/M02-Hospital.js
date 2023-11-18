function hospital(input) {


    let days = Number(input[0]);
    let doctorsInitial = 7;

    let doctors = 7;

    let patientsTaken = 0;
    let patientsRejected = 0;


    for (let i = 1; i <= days; i++) {

        let patientsPerDay = Number(input[i]);

        if (i % 3 === 0) {

            if (patientsRejected > patientsTaken) {
                doctors++
            }

        }

        if (patientsPerDay >= 7) {
            patientsTaken += doctors;
        } else {
            patientsTaken += patientsPerDay;
        }

        if (patientsPerDay >= doctors) {
            patientsRejected += (patientsPerDay - doctors);
        }

    }


    console.log(`Treated patients: ${patientsTaken}.`);
    console.log(`Untreated patients: ${patientsRejected}.`);


}
hospital(["4", "7", "27", "9", "1"]);