function printObject(table) {

    let towns = [];
    table.shift();

    for (const line of table) {
        let reg = /\s*\|\s*/;
        let tokens = line.split(reg).filter(el => el);
        let [town, latitude, longitude] = tokens;
        let props = {
            Town: town,
            Latitude: +(Number(latitude).toFixed(2)),
            Longitude: +(Number(longitude).toFixed(2))
        };

        towns.push(props)
    }

    return JSON.stringify(towns);

}