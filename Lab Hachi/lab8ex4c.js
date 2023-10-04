// Define the product_quantities array
let product_quantities = [2, 1, 1, 1, 1]; 

// Define the products array with name and price properties
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
];

// Iterate through product_quantities and products to print each element in a table
document.write("<table>");
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");
for (let i = 0; i < product_quantities.length; i++) {
    
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    /* changed for lab 8 part 4.3
    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); // Product #
    document.write("<td>" + product.name + "</td>"); // Name
    document.write("<td>" + product.price.toFixed(2) + "</td>"); // Price
    document.write("<td>" + quantity + "</td>"); // Quantity
    document.write("<td>" + extended_cost.toFixed(2) + "</td>"); // Extended Cost
    document.write("</tr>");  */
    // Create a new row for each product and add hover effect
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
    `;

    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });

    newRow.addEventListener('mouseout', function () {
        newRow.style.backgroundColor = '';
    });

    // Add a click event listener to delete the clicked row
    newRow.addEventListener('click', function () {
        document.querySelector('table').deleteRow(newRow.rowIndex);
    });

    // Append the new row to the table
    document.querySelector('table').appendChild(newRow);

}
document.write("</table>");

/* changed from delete button to add button for lab 8 task 4.3
// Create a button to delete the last row for lab 8 task 4.2
//This line creates a new HTML button element and assigns it to the deleteButton variable. The button is created but not yet added to the document.
let deleteButton = document.createElement('button');
//et the text content of the button to "Delete Last Row." This text will be displayed on the button.
deleteButton.textContent = 'Delete Last Row';
//add a click event listener to the button. When the button is clicked, the deleteLastRow function will be executed. 
deleteButton.addEventListener('click', deleteLastRow);
//append (add) the button to the document's body. 
document.body.appendChild(deleteButton);
*/
// Create a button to add a new row
let addButton = document.createElement('button');
addButton.textContent = 'Add New Row';
addButton.addEventListener('click', addNewRow);

// Append the button to the document body
document.body.appendChild(addButton);


/* Lab8 task 4.1 has you add a row if the table is clicked, but since we have a completed table
without additional data, we just need to add a row with the appropriate number of cells...
no need to worry about the related cell data for a new product. that is not the purpose of this
task.
*/

// Function to add a new empty row to the table
function addNewRow() {
    let table = document.querySelector('table');
    
    // Append a new empty row to the table
    let newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td>blank</td>
        <td>blank</td>
        <td>blank</td>
        <td>blank</td>
        <td>blank</td>
    `;

    // Add a hover effect to the new row
    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });

    // Remove the hover effect when the mouse leaves the row
    newRow.addEventListener('mouseout', function () {
        newRow.style.backgroundColor = '';
    });
    
    // Add a click event listener to the new row to delete it when clicked
    newRow.addEventListener('click', function () {
        table.deleteRow(newRow.rowIndex);
    });
}
/* part of Lab 8 task 4.2; removed for part 4.3
// Add a click event listener to the table to trigger the addNewRow function
document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});
*/
// Function to delete the last row of the table
function deleteLastRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length;

    // Ensure there is at least one row before attempting to delete
    if (rowCount > 1) {
        table.deleteRow(rowCount - 1); // Delete the last row
    }
}
/* for lab 8 part 4.2; removed for part 4.3
// Add a click event listener to the table to trigger the addNewRow function
document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});
*/
