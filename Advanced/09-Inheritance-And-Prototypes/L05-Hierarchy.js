function extendPrototype() {

    const unit = {
        'm': { cm: 0.01, mm: 0.001 },
        'cm': { m: 100, mm: 0.1 },
        'mm': { m: 1000, cm: 10 }
    }

    class Figure {

        constructor() {
            this.units = 'cm';
        }
        get area() {

        }
        changeUnits(u) {
            let factor = unit[u][this.units];
            if (this.units !== u) {
                for (const key in this) {
                    if (typeof this[key] === 'number') {
                        this[key] *= factor;
                    }
                }
            }
            this.units = u;
            return this;
        }
        toString() {
            return `Figure units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius;
        }
        get area() {
            return (this.radius ** 2) * Math.PI;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super()
            this.units = units,
                this.width = width * unit[this.units]['cm'],
                this.height = height * unit[this.units]['cm']
        }
        get area() {
            return this.width * this.height;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }

}

let { Figure, Circle, Rectangle } = extendPrototype()

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.width)
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.width)
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.radius);
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
