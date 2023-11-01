function basket(input) {
    
    let trainingFee = Number(input[0]);
    let sneakers = Number(input[0]) * 0.6;
    let outfit = sneakers * 0.8;
    let ball = outfit * 0.25;
    let accessories = ball * 0.2;
    

    let sum = trainingFee + sneakers + outfit + ball + accessories; 
    

    console.log(sum);
    
    
}
basket(["365"]);