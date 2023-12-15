function checkDistance(x1, y1, x2, y2) {

    let sides1 = Math.pow(Math.abs(y1 - 0), 2) + Math.pow(Math.abs(x1 - 0), 2);
    let distance1 = Math.sqrt(sides1);
    Number.isInteger(distance1) ? 
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`) :
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    let sides2 = Math.pow(Math.abs(y2 - 0), 2) + Math.pow(Math.abs(x2 - 0), 2);
    let distance2 = Math.sqrt(sides2);
    Number.isInteger(distance2) ? 
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`) :
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    let sides3 = Math.pow(Math.abs(y1 - y2), 2) + Math.pow(Math.abs(x1 - x2), 2);
    let distance3 = Math.sqrt(sides3);
    Number.isInteger(distance3) ? 
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) :
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

}
