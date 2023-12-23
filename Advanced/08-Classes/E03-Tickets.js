function sortTickets(tickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            Object.assign(this, {
                destination,
                price,
                status
            })
        }
    }

    let cities = [];

    for (const city of tickets) {
        let [destination, price, status] = city.split('|')
        price = +price;
        cities.push(new Ticket(destination, price, status));
    }

    return cities.sort((a, b) => {
        if (+a[criteria]) {
            return a[criteria] - b[criteria]
        } else {
            return a[criteria].localeCompare(b[criteria])
        }
    });

}
sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);
