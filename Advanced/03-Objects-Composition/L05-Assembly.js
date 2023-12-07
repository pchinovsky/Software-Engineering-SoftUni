function createAssemblyLine(obj) {

    function hasClima(obj) {

        const template = {
            temp: 21,
            tempSettings: 21,
            adjustTemp() {
                if (obj.temp < obj.tempSettings) {
                    obj.temp += 1;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp -= 1;
                }
            }
        };

        Object.assign(obj, template);

    }

    function hasAudio(obj) {

        const template = {
            currentTrack: {
                name: null,
                artist: null
            },
            nowPlaying() {
                if (obj.currentTrack !== null) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        };

        Object.assign(obj, template);

    }

    function hasParktronic(obj) {

        const template = {
            checkDistance(distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }

        Object.assign(obj, template);

    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    }

}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
