function calcMaterials(base, incr) {


    let layers = 0;
    let count = 0;

    let stone = 0;
    let stoneTotal = 0;

    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (let i = base; i >= 1; i -= 2) {

        layers++
        count++

        let area = i * i;

        stone = (i - 2) * (i - 2);

        if (count === 5 && i >= 3) {

            lapis += (area - stone);
            count = 0;

        } else if (i < 3) {

            gold += (i * i);
            stone = 0;

        } else {

            marble += (area - stone);
        }

        stoneTotal += stone;

    }

    console.log(`Stone required: ${Math.ceil(stoneTotal * incr)}`);
    console.log(`Marble required: ${Math.ceil(marble * incr)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * incr)}`);
    console.log(`Gold required: ${Math.ceil(gold * incr)}`);
    console.log(`Final pyramid height: ${Math.floor(layers * incr)}`);

}
