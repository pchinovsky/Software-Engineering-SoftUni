function addItem() {

    let inputField = document.getElementById('newItemText')
    let input = inputField.value;

    let li = document.createElement('li');
    let text = document.createTextNode(input);
    li.appendChild(text);

    let list = document.getElementById('items');
    list.appendChild(li);
    inputField.value = '';

}