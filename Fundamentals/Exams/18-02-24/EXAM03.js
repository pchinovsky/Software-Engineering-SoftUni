function ops3(input) {
    let phonese = input.shift().split(', ');

    let i = 0;
    let line = input[i];

    while (line !== 'End') {
        let [com, phone] = line.split(' - ');

        switch (com) {
            case 'Add':
                if (!phonese.includes(phone)) phonese.push(phone);
                break;

            case 'Remove':
                if (phonese.includes(phone)) {
                    let ind = phonese.indexOf(phone);
                    phonese.splice(ind, 1);
                }
                break;

            case 'Bonus phone':
                let [oldPhone, newPhone] = phone.split(':');
                if (phonese.includes(oldPhone)) {
                    let ind = phonese.indexOf(oldPhone);
                    phonese.splice(ind + 1, 0, newPhone);
                }
                break;

            case 'Last':
                if (phonese.includes(phone)) {
                    let ind = phonese.indexOf(phone);
                    phonese.splice(ind, 1);
                    phonese.push(phone);
                }
                break;

        }

        i++
        line = input[i];

    }

    console.log(phonese.join(', '));

}
ops3(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);
