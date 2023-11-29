function song(input) {
 
    let songs = input[0];
    let standard = input[input.length - 1];

    class Song {
 
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        log(typeList) {

            if (typeList === standard || standard === 'all') {
                console.log(this.name);
            }

        }

    }
    
    for (let i = 1; i <= songs; i++) { 
        let line = input[i];
        let parameters = line.split('_');
        let [typeList, name, time] = parameters;
        let song = new Song(typeList, name, time);

        song.log(typeList);

    }
 
}