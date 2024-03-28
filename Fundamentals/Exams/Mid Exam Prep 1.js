function ops(input) {
    let message = input.shift().split('');
    let com = input.shift();

    let operations = {
        'Move': (els) => {
            let qty = Number(els[1]);
            let letters = message.splice(0, qty);
            message.push(...letters);
        },
        'Insert': (els) => {
            let ind = Number(els[1]);
            let val = els[2];
            message.splice(ind, 0, ...val);
        },
        'ChangeAll': (els) => {
            let sub = els[1];
            let replacement = els[2];
            for (let i = 0; i < message.length; i++) {
                if (message[i] === sub) {
                    message[i] = replacement;
                }
            }
        }
    };

    while (com !== 'Decode') {

        let els = com.split('|');
        let oper = els[0];
        operations[oper](els);

        com = input.shift();
    }
    console.log(`The decrypted message is: ${message.join('')}`);
}
ops(['zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode']);
