function assembleCar(car) {
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    let assembled = { model: car.model };
    assembled.engine = engine(car.power)
    assembled.carriage = { type: car.carriage, color: car.color };

    if (car.wheelsize % 2 === 0) {
        assembled.wheels = Array(4).fill(car.wheelsize - 1);
    } else {
        assembled.wheels = Array(4).fill(car.wheelsize);
    }

    function engine(power) {
        if (power <= 90) {
            power = engines.small.power;
            volume = engines.small.volume;
        } else if (power <= 120) {
            power = engines.normal.power;
            volume = engines.normal.volume;
        } else if (power <= 200) {
            power = engines.monster.power;
            volume = engines.monster.volume;
        }
        return { power, volume };
    }

    return assembled;
}