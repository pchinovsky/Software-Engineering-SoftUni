function round(num, decimals) {


    if (decimals > 15) {
        
        decimals = 15;

    }

    num = num.toFixed(decimals);

    console.log(parseFloat(num));


}
