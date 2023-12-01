function countGuests(input) {

    let guestlistDone = false;
    let guests = { 'VIP': [], 'regular': [] };

    for (let i = 0; i < input.length; i++) {
        let com = input[i];

        if (com === 'PARTY') {
            guestlistDone = true;
        } else {
            if (guestlistDone === true) {

                if (!(isNaN(com[0]))) {
                    let ind = guests.VIP.indexOf(com);
                    guests.VIP.splice(ind, 1);
                } else {
                    ind = guests.regular.indexOf(com);
                    guests.regular.splice(ind, 1);
                }

            } else {

                if (!(isNaN(com[0]))) {
                    guests.VIP.push(com);
                } else {
                    guests.regular.push(com);
                }

            }

        }

    }

    let guestsMissing = guests.VIP.length + guests.regular.length;

    console.log(guestsMissing);
    console.log(guests['VIP'].join('\n'));
    console.log(guests['regular'].join('\n'));

}