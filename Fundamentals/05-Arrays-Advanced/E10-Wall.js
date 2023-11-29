function buildWall(wallSegments) {

    wallSegments.map(Number);

    let concretePerDay = 0;
    let concreteEach = [];
    let concreteTotal = 0;

    let i = 0;

    while (wallSegments.some((num) => num < 30)) {

        if (wallSegments[i] < 30) {
            wallSegments[i]++;
            concretePerDay += 195;
        }

        i++

        if (i === wallSegments.length || !(wallSegments.some((num) => num < 30))) {
            i = 0;
            concreteTotal += concretePerDay;
            concreteEach.push(concretePerDay);
            concretePerDay = 0;
        }

    }

    console.log(concreteEach.join(', '));
    console.log(`${concreteTotal * 1900} pesos`);   

}