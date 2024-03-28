function ops(input) {
    const numPieces = input.shift();
    let pieces = [];
    for (let i = 0; i < numPieces; i++) {
        let [name, composer, key] = input[i].split('|');
        let piece = { name, composer, key };
        pieces.push(piece);
    }

    let com = input.shift();

    while (com !== 'Stop') {
        if (com.startsWith('Add')) {
            let [, name, composer, key] = com.split('|');
            if (pieces.find(obj => obj.name === name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                pieces.push({ name, composer, key });
                console.log(`${name} by ${composer} in ${key} added to the collection!`);
            }
        } else if (com.startsWith('Remove')) {
            let [, name] = com.split('|');
            if (!pieces.find(obj => obj.name === name)) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                const ind = pieces.findIndex(obj => obj.name === name);
                pieces.splice(ind, 1);
                console.log(`Successfully removed ${name}!`);
            }
        } else if (com.startsWith('ChangeKey')) {
            let [, name, key] = com.split('|');
            if (!pieces.find(obj => obj.name === name)) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                const ind = pieces.findIndex(obj => obj.name === name);
                pieces[ind].key = key;
                console.log(`Changed the key of ${name} to ${key}!`);
            }
        }
        com = input.shift();
    }

    for (const piece of pieces) {
        console.log(`${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }
}
ops([

    '3',

    'Fur Elise|Beethoven|A Minor',

    'Moonlight Sonata|Beethoven|C# Minor',

    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',

    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

    'Add|Fur Elise|Beethoven|C# Minor',

    'Remove|Clair de Lune',

    'ChangeKey|Moonlight Sonata|C# Major',

    'Stop'

]);