function distance(x1, y1, x2, y2) {


    let sides = Math.pow(Math.abs(y1 - y2), 2) + Math.pow(Math.abs(x1 - x2), 2);
    let distance = Math.sqrt(sides);

    console.log(distance);


}
