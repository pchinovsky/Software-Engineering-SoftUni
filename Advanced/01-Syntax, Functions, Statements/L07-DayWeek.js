function day(input) {
 
    let days = [0, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (days.includes(input)) {
        console.log(days.indexOf(input));
    } else {
        console.log('error');
    }

}