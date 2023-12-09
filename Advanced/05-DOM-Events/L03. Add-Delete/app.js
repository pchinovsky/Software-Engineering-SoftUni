function addItem() {

    let input = document.getElementById('newItemText').value;
    let text = document.createTextNode(input);
    let item = document.createElement('li');
    item.appendChild(text);

    const button = document.createElement('a');
    let link = document.createTextNode("[Delete]");
    button.appendChild(link);
    button.href = '#';
    button.addEventListener('click', deleteEl);
    item.appendChild(button);

    let list = document.getElementById('items');
    list.appendChild(item);

    function deleteEl() {
        item.remove();
    }

}