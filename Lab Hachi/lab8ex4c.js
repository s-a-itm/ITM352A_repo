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

    // Create a new row for each product and add hover effect
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
    `;

    // Append the new row to the table
    document.querySelector('table').appendChild(newRow);

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

}
document.write("</table>");

// Create a button to add a new row
let addButton = document.createElement('button');
addButton.textContent = 'Add New Row';
addButton.addEventListener('click', addNewRow);

// Append the button to the document body
document.body.appendChild(addButton);

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

// Function to delete the last row of the table
function deleteLastRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length;

    // Ensure there is at least one row before attempting to delete
    if (rowCount > 1) {
        table.deleteRow(rowCount - 1); // Delete the last row
    }
}
