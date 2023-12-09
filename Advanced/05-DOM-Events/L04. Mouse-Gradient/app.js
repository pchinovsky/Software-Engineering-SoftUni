function attachGradientEvents() {
    
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', move);
    gradient.addEventListener('mouseout', out);

    function move(e) {
        let result = document.getElementById('result');
        let boxWidth = e.target.clientWidth;
        let mousePos = e.offsetX / (boxWidth - 1);
        let percent = Math.floor(mousePos * 100);
        result.textContent = percent + '%';
    }

    function out() {
        result.textContent = '';
    }

}