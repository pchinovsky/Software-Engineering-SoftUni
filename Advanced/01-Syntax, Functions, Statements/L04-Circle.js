function calcArea(rad) {
 
    let type = typeof(rad);
    let area = 0;

    if (type === 'number') {
        area = Math.pow(rad, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}