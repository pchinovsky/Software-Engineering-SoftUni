function generateReport() {
    let columnTitles = [];
    let employees = [];

    const checked = document.querySelectorAll('input[type=checkbox]:checked')

    for (const checkbox of checked) {
        columnTitles.push(checkbox.parentNode.textContent.trim());
    }

    const rows = document.querySelectorAll('tbody tr');
    const heads = document.querySelectorAll('thead th');
    const textarea = document.querySelector('textarea');

    for (const row of rows) {
        let rowObj = {};
        let count = 0;
        let cells = row.querySelectorAll('td');

        for (const cell of cells) {
            let columnTitle = heads[count].textContent.trim();

            if (columnTitles.includes(columnTitle)) {
                if (cell.textContent !== '') rowObj[columnTitle] = cell.textContent;
            }
            
            count++
        }
        if (Object.keys(rowObj).length > 0) employees.push(rowObj);
    }

    textarea.value = JSON.stringify(employees);

}





