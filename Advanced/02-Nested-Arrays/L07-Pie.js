function cut(flavours, start, end) {
 
    let startInd = flavours.indexOf(start);
    let endInd = flavours.indexOf(end);

    return flavours.slice(startInd, endInd + 1);
 
}