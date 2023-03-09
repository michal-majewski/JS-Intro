function createMultiplicationTable(rows, columns) {
    let html = '<table>';

    for (let rowNumber of Array(rows).keys()) {
        html = html + '<tr>';

        for (let columnNumber of Array(columns).keys()) {
            html = html + `<td>${(rowNumber + 1) * (columnNumber + 1)}</td>`;
        }

        html = html + '</tr>';
    }

    html = html + '</table>';

    return html;
}

function onGeneratePressed() {
    let rowsInput = document.getElementById('rows-input').value;
    let columnInput = document.getElementById('columns-input').value;

    let rows = Number(rowsInput);
    let columns = Number(columnInput);

    if (!isNaN(rows) && !isNaN(columns)) {
        let tableHTML = createMultiplicationTable(rows, columns);
        document.write(tableHTML);
    } else {
        alert("Error: Invalid Input")
    }
}
