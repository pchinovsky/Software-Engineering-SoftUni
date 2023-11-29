function passengers(input) {
 
    let wagons = input[0].split(' ').map(Number);
    let capacity = input[1];

    for (let i = 2; i < input.length; i++) {
        let com = input[i];

        if (com.includes("Add")) {
            let wagon = com.split(' ')[1];
            wagons.push(Number(wagon));
        } else {

            for (let j = 0; j < wagons.length; j++) {
                let wagon = Number(wagons[j]);
                let passengers = Number(com);

                if ((wagon + passengers) <= capacity) {
                    wagons[j] += passengers;
                    break;
                } else {
                    continue;
                }
             
            }

        }
     
    }

    console.log(wagons.join(' '));
 
}
