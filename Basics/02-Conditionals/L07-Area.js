function area(input) {

    let shape = input[0];
    let area = 0;


    if (shape === "square") {
        area = (Number(input[1]) * Number(input[1]));
    } else if (shape === "rectangle") {
        area = (Number(input[1]) * Number(input[2]));
    } else if (shape === "circle") {
        area = (Math.pow(Number(input[1]), 2)) * Math.PI;
    } else if (shape === "triangle") {
        area = (Number(input[1]) * Number(input[2])) / 2;
    }

    
    console.log(area.toFixed(3));


}
area(["circle", "6"]);