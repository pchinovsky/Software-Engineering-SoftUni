function listMovies(input) {

    let movies = [];

    for (const movie of input) {

        if (movie.includes('addMovie')) {
            let name = movie.substring(9,);
            let newMovie = { 'name': name };
            movies.push(newMovie);
        } else if (movie.includes('directedBy')) {
            let data = movie.split(' ');
            let ind = data.indexOf('directedBy');
            let name = data.splice(0, ind).join(' ')
            ind = data.indexOf('directedBy');
            let director = data.splice(ind + 1,).join(' ');
            let objInd = movies.findIndex(obj => obj.name === name);

            if (objInd !== -1) {
                let objUpdate = movies[objInd];
                objUpdate['director'] = director;
            }
        } else if (movie.includes('onDate')) {
            let data = movie.split(' ');
            let ind = data.indexOf('onDate');
            let name = data.splice(0, ind).join(' ');
            ind = data.indexOf('onDate');
            let date = data.splice(ind + 1,).join();
            let objInd = movies.findIndex(obj => obj.name === name);

            if (objInd !== -1) {
                let objUpdate = movies[objInd];
                objUpdate['date'] = date;
            }

        }

    }

    for (const movie of movies) {
        let props = Object.keys(movie).length;

        if (props === 3) {
            let str = JSON.stringify(movie);
            console.log(str);
        }
        
    }

}