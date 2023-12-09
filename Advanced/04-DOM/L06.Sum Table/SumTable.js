function sumTable() {

    let prices = document.querySelectorAll('td:last-child');    
    let sum = Array.from(prices).reduce((acc, val) => acc + Number(val.textContent), 0);
    document.getElementById('sum').textContent = sum;

}
