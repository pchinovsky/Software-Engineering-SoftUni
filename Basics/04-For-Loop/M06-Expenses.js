function expenses(input) {


    let months = Number(input[0]);

    let electr = 0;
    let water = 0;
    let net = 0;
    let othersMonth = 0;
    let othersTotal = 0;


    for (let i = 1; i <= months; i++) {

        let electricity = Number(input[i]);

        electr += electricity;
        water += 20;
        net += 15;
        othersMonth = (electricity + 35) * 1.2;
        othersTotal += othersMonth;

    }

    let expensesTotal = electr + water + net + othersTotal;
    let average = expensesTotal / months;


    console.log(`Electricity: ${electr.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${net.toFixed(2)} lv`);
    console.log(`Other: ${othersTotal.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

    
}
expenses(["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"
])