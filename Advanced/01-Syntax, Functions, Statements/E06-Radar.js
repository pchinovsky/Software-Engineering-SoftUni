function checkSpeed(speed, area) {
    
    const limits = {
        motorway: 130,
        interstate: 90, 
        city: 50, 
        residential: 20
    };

    const limit = limits[area];

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        const diff = speed - limit;
        let status = '';
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
      
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }

}