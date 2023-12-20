function addItem() {

    const menu = document.getElementById('menu');
    const textInput = document.querySelector('input#newItemText');
    const valueInput = document.querySelector('input#newItemValue');

    let op = document.createElement('option');
    op.textContent = textInput.value;
    op.value = valueInput.value;
    menu.appendChild(op);
    textInput.value = '';
    valueInput.value = '';

}
