function schedule(input) {
    
    let meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }

    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }

}