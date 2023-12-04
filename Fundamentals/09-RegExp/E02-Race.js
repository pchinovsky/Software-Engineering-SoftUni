function rankRacers(input) {

    let list = input.shift();
    let lines = input;
    let regex1 = /\d/g;
    let regex2 = /[A-Za-z]/g;
    let racers = {};

    let i = 0
    let com = lines[i];

    while (lines[0] !== 'end of race') {
        let line = lines.shift();
        let name = line.match(regex2).join('');
        let distance = line.match(regex1).map(Number).reduce((acc, val) => acc + val);

        if (list.includes(name)) {

            if (racers[name]) {
                racers[name] += distance;
            } else {
                racers[name] = distance;
            }

        }

    }

    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 3; i++) {
        let endings = {0: 'st', 1: 'nd', 2: 'rd'};
        let name = sorted[i][0];
        console.log(`${i + 1}${endings[i]} place: ${name}`);
    }

}