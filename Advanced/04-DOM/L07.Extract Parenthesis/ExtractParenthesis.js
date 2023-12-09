function extract(id) {

    let contents = document.getElementById(id).textContent;
    let regex = /\(([^)]+)\)/g;
    let arr = [...contents.matchAll(regex)].map(match => match[1]);

    return arr.join('; ');

} 



