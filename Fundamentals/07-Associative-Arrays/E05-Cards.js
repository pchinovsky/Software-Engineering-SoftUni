function countCardValue(draws) {

    let values = {};

    for (const hand of draws) {
        let [name, draw] = hand.split(': ')
        let cards = draw.split(', ');

        if (!values.hasOwnProperty(name)) {
            values[name] = [];
        }

        for (const card of cards) {

            if (!(values[name].includes(card))) {
                values[name].push(card);
            }

        }

    }

    for (const person in values) {
        let valueSum = 0;

        for (const card of values[person]) {
            let power = 0;
            let type = 0;

            if (card.length === 2) {
                [power, type] = card.split('');
            } else {
                power = card.slice(0, 2);
                type = card[2];
            }

            switch (type) {

                case "S":
                    type = 4;
                break;

                case "H":
                    type = 3;
                break;

                case "D":
                    type = 2;
                break;

                case "C":
                    type = 1;
                break;

            }
            
            switch (power) {

                case "J": 
                    power = 11;
                break;

                case "Q":
                    power = 12;
                break;

                case "K":
                    power = 13;
                break;

                case "A":
                    power = 14;
                break;

            }

            let value = type * Number(power);
            valueSum += value;

        }

        console.log(`${person}: ${valueSum}`);
    }

}