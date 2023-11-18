function trekking(input) {


    let groupsAmount = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    let all = 0;


    for (let i = 1; i <= groupsAmount; i++) {

        let people = Number(input[i]);

        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            monblan += people;
        } else if (people <= 25) {
            kili += people;
        } else if (people <= 40) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }

        all += people;

    }


    console.log(`${(musala / all * 100).toFixed(2)}%`);
    console.log(`${(monblan / all * 100).toFixed(2)}%`);
    console.log(`${(kili / all * 100).toFixed(2)}%`);
    console.log(`${(k2 / all * 100).toFixed(2)}%`);
    console.log(`${(everest / all * 100).toFixed(2)}%`);

    
}
trekking(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);

