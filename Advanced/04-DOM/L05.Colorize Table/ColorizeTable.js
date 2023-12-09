function colorize() {

    let rows = document.querySelectorAll('table tr:nth-child(2n)');
    Array.from(rows)
        .forEach(el => el.style.background = 'teal');

}