class Point {
    constructor(x, y) {
        Object.assign(this, {
            x, 
            y
        })
    }

    static distance(p1, p2) {
        let sides = Math.pow(Math.abs(p1.y - p2.y), 2) + Math.pow(Math.abs(p1.x - p2.x), 2);
        return Math.sqrt(sides);
    } 
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
