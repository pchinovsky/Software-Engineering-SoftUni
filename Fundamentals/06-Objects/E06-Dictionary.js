function dictionary(input) {

    let dictArr = [];
    let dictObj = {};

    for (const line of input) {
        let term = JSON.parse(line);
        let entry = Object.keys(term).join();

        if (!(dictArr.includes(entry))) {
            dictArr.push(entry)
        }

        dictObj[entry] = term[entry];

    }

    let sorted = dictArr.sort();

    for (const term of sorted) {
        console.log(`Term: ${term} => Definition: ${dictObj[term]}`);
    }

}