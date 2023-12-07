function makeObject(name, population, treasury) {

    return city = { name, population, treasury };
    // if you make it this way the variable names become the keys
    // if you make it like city[name] = name - key name will be the contents of the variable.

}
makeObject('Tortuga',
    7000,
    15000
);