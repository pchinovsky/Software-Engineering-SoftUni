function printObject(table) {

    let towns = {};

    for (const line of table) {
        let [town, latitude, longitude] = line.split(' | ');
        let props = { 'latitude': Number(latitude), 'longitude': Number(longitude) };
        towns[town] = props;
    }

    for (const key in towns) {
        console.log(`{ town: '${key}', latitude: '${towns[key].latitude.toFixed(2)}', longitude: '${towns[key].longitude.toFixed(2)}' }`);
    }

}