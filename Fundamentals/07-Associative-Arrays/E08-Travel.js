function listOffers(input) {

    let offers = {};

    for (const line of input) {
        let [country, destination, price] = line.split(' > ');

        if (!(offers.hasOwnProperty(country))) {
            offers[country] = { [destination]: Number(price) };
        } else {

            if (!(offers[country].hasOwnProperty(destination))) {
                offers[country][destination] = Number(price);
            } else {

                if (price < offers[country][destination]) {
                    offers[country][destination] = Number(price);
                }

            }

        }

    }

    let sorted = Object.keys(offers).sort((a, b) => a.localeCompare(b));

    for (const country of sorted) {
        let sortedDestinations = Object.entries(offers[country]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        let destinationsList = sortedDestinations.map(el => el.join(' -> '));
        console.log(`${country} -> ${destinationsList.join(' ')}`);
    }

}