import { createMultiplicationTable } from "./generateTable";

let args = process.argv.slice(2);

let rowsInput = args[0];
let columnInput = args[1];

let rows = Number(rowsInput);
let columns = Number(columnInput);

if (!isNaN(rows) && !isNaN(columns)) {
    let tableString = createMultiplicationTable(rows, columns);
    console.log(tableString);
} else {
    console.warn("Error: Invalid Input")
}
