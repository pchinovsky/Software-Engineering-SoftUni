function bike(input) {


    let young = Number(input[0]);
    let old = Number(input[1]);
    let road = input[2];
    let taxYoung = 0;
    let taxOld = 0;


    switch (road) {

        case "trail":
            taxYoung = 5.5;
            taxOld = 7;
            break;

        case "cross-country":
            if (young + old >= 50) {
                taxYoung = 8 * 0.75;
                taxOld = 9.5 * 0.75;
            } else {
                taxYoung = 8;
                taxOld = 9.5;
            }
            break;

        case "downhill":
            taxYoung = 12.25;
            taxOld = 13.75;
            break;

        case "road":
            taxYoung = 20;
            taxOld = 21.5;

    }

    let income = (taxYoung * young) + (taxOld * old);
    let expense = income * 0.05;
    let gain = income - expense;

    
    console.log(`${gain.toFixed(2)}`);


}
bike(["10", "20", "trail"]);