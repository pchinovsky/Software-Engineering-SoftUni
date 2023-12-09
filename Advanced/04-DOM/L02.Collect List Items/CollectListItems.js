function extractText() {

    let points = document.querySelectorAll('ul#items li');
    let area = document.querySelector('#result');

    for (const point of points) {
        area.value += point.textContent + '\n';
    }

}
