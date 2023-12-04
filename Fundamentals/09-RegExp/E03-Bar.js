function listConsumption(input) {

    let regex = /%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+\.?\d+)\$/;
    let total = 0;

    while (input[0] !== 'end of shift') {
        let line = input.shift();
        
        if (line.match(regex)) {
            let variables = regex.exec(line).groups;
            let { name, product, count, price } = variables;
            let spent = +price * +count;
            console.log(`${name}: ${product} - ${spent.toFixed(2)}`);
            total += spent;
        }

    }

    console.log(`Total income: ${total.toFixed(2)}`);

}