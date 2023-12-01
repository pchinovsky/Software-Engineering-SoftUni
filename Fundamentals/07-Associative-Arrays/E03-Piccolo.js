function parkingLot(input) {
 
    let parked = {};

    for (const car of input) {       
        let [direction, number] = car.split(', ');

        if (direction === "IN") {
            parked[number] = direction;
        } else {
            delete parked[number];
        }

    }

    if (Object.keys(parked).length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let nums = Object.keys(parked).sort((a, b) => a.localeCompare(b));
        console.log(nums.join('\n'));
    }
    
}
