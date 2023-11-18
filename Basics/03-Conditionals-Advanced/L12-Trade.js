function commerce(input) {


    let city = input[0];
    let sales = Number(input[1]);

    let com = 0;


    switch (city) {

        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                com = sales * 0.05;
            } else if (sales > 500 && sales <= 1000) {
                com = sales * 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                com = sales * 0.08;
            } else if (sales > 10000) {
                com = sales * 0.12;
            }
            break;

        case "Varna":
            if (sales >= 0 && sales <= 500) {
                com = sales * 0.045;
            } else if (sales > 500 && sales <= 1000) {
                com = sales * 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                com = sales * 0.1;
            } else if (sales > 10000) {
                com = sales * 0.13;
            }
            break;

        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                com = sales * 0.055;
            } else if (sales > 500 && sales <= 1000) {
                com = sales * 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                com = sales * 0.12;
            } else if (sales > 10000) {
                com = sales * 0.145;
            }
            break;

    }

    if (com > 0) {

        console.log(com.toFixed(2));

    } else {

        console.log("error");
        
    }


}
commerce(["Sofia", "-1500"]);