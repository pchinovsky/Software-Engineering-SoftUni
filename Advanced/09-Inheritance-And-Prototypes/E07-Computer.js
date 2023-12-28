function createComputerHierarchy() {

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate abstract class')
            }
            Object.assign(this, {
                manufacturer,
                processorSpeed,
                ram,
                hardDiskSpace
            })
        }
    }

    class Keyboard {
        constructor(manufacturer, responseTime) {
            Object.assign(this, {
                manufacturer,
                responseTime
            })
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            Object.assign(this, {
                manufacturer,
                width,
                height
            })
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            Object.assign(this, {
                manufacturer,
                expectedLife
            })
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processingSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processingSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(bat) {
            if (bat instanceof Battery) {
                this._battery = bat;
            } else {
                throw new TypeError('Argument must be Battery class instance');
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processingSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processingSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(key) {
            if (key instanceof Keyboard) {
                this._keyboard = key;
            } else {
                throw new TypeError('Argument must be Keyboard class instance');
            }
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(mon) {
            if (mon instanceof Monitor) {
                this._monitor = mon;
            } else {
                throw new TypeError('Argument must be Monitor class instance');
            }
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
