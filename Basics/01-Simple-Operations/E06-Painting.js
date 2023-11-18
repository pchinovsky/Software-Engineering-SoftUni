function painting(input) {
    
    let nylonAmount = Number(input[0]) + 2;
    let nylonPrice = nylonAmount * 1.5;
    let paint = Number(input[1]) * 14.5;
    let solvent = Number(input[2]) * 5;
    
    let paintAdded = paint * 0.1;
    let bags = 0.4;
    
    let sum = nylonPrice + paint + paintAdded + solvent + bags;
    let workersPay = sum * 0.3;
    let workersOverallPay = workersPay * Number(input[3]);
    

    let sumTotal = sum + workersOverallPay;
    
    
    console.log(sumTotal);

    
}
painting(["10", "11", "4", "8"]);