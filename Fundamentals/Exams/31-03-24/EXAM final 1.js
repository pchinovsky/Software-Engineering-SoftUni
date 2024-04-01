function ops1(input) {
    let pass = input.shift();

    let com = input.shift();
    while (com !== 'Complete') {
        let [act, ...args] = com.split(' ');

        switch (act) {
            case 'Make':
                if (args[0] === 'Upper' && args.length > 1) {
                    let i = Number(args[1]);
                    if (i >= 0 && i < pass.length) {
                        pass = pass.substring(0, i) + pass[i].toUpperCase() + pass.substring(i + 1);
                    }
                } else if (args[0] === 'Lower' && args.length > 1) {
                    let i = Number(args[1]);
                    if (i >= 0 && i < pass.length) {
                        pass = pass.substring(0, i) + pass[i].toLowerCase() + pass.substring(i + 1);
                    }
                }
                console.log(pass);
                break;
            case 'Insert':
                if (args.length > 1) {
                    let i = Number(args[0]);
                    let substring = args[1];
                    if (i >= 0 && i <= pass.length) {
                        pass = pass.slice(0, i) + substring + pass.slice(i);
                    }
                }
                console.log(pass);
                break;
            case 'Replace':
                if (args.length > 1 && pass.includes(args[0])) {
                    let value = args[1];
                    let charCode = args[0].charCodeAt() + +value;
                    let newChar = String.fromCharCode(charCode);
                    while(pass.includes(args[0])) {
                        pass = pass.replace(args[0], newChar);
                    }
                }
                console.log(pass);
                break;
            case 'Validation':
                if (pass.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                }
                if (!/^[A-Za-z0-9_]+$/.test(pass)) {
                    console.log(`Password must consist only of letters, digits and _!`);
                }
                if (!/[A-Z]/.test(pass)) {
                    console.log(`Password must consist at least one uppercase letter!`);
                }
                if (!/[a-z]/.test(pass)) {
                    console.log(`Password must consist at least one lowercase letter!`);
                }
                if (!/[0-9]/.test(pass)) {
                    console.log(`Password must consist at least one digit!`);
                }
                break;
            default:
                break;
        }
        com = input.shift();
    }
}
ops1(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])

