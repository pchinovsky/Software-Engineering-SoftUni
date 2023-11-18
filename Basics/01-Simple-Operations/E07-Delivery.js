function delivery(input) {
    
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.4;
    let vegMenu = Number(input[2]) * 8.15;
    

    let sum = chickenMenu + fishMenu + vegMenu;
    let dessert = sum * 0.2;
    
    let delivery = 2.5;
    

    let sumTotal = sum + dessert + delivery; 
    

    console.log(sumTotal);
    
    
}
delivery(["2", "4", "3"]);
