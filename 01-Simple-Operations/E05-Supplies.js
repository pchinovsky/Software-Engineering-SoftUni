function bill(input) {
    
    let pens = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let detergent = Number(input[2]) * 1.2;
    

    let sum = pens + markers + detergent;
    
    let discount = sum * Number(input[3]) / 100;
    
    let sumPayed = sum - discount;
    

    console.log(sumPayed);
    

}
bill(["2", "3", "4", "25"]);