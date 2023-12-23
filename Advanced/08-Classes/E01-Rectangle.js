class Rectangle {
    constructor(width, height, color) {
        Object.assign(this, {
            width,
            height,
            color: color.charAt(0).toUpperCase() + color.slice(1),
        })

    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect1 = new Rectangle(4, 5, 'red');
console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.color);
console.log(rect1.calcArea());
