// Product Data and calculating extended-price (aka item_total)
let item1 = 'Apple Watch Ultra screen protector';
let quantity1 = 2;
let price1 = 6.23;
let extended_price1 = quantity1 * price1;

let item2 = 'Apple Watch Ultra extra band';
let quantity2 = 1;
let price2 = 22.64;
let extended_price2 = quantity2 * price2;

let item3 = 'iPhone 15 Pro case';
let quantity3 = 1;
let price3 = 25.99;
let extended_price3 = quantity3 * price3;

let item4 = 'Apple Watch charging cable';
let quantity4 = 1;
let price4 = 33.95;
let extended_price4 = quantity4 * price4;

let item5 = 'Apple USB-C cable';
let quantity5 = 1;
let price5 = 35.00;
let extended_price5 = quantity5 * price5;

// Calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3+extended_price4+extended_price5;

// Calculate sales tax
let taxRate = 0.0575; // 5.75%
let taxAmount = subtotal * taxRate;

// Calculate total
let total = subtotal + taxAmount;

// Populate the table rows using DOM manipulation
let table = document.getElementById('invoiceTable');

let row = table.insertRow(); // Create a new row for each item
row.insertCell(0).innerHTML = `${item1}`;
row.insertCell(1).innerHTML = `${quantity1}`;
row.insertCell(2).innerHTML = '$'+`${price1}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price1}`);
row = table.insertRow(); // Create a new row for each item
row.insertCell(0).innerHTML = `${item2}`;
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = '$'+`${price2}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price2}`);
row = table.insertRow(); // Create a new row for each item
row.insertCell(0).innerHTML = `${item3}`;
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = '$'+`${price3}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price3}`);
row = table.insertRow(); // Create a new row for each item
row.insertCell(0).innerHTML = `${item4}`;
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = '$'+`${price4}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price4}`);
row = table.insertRow(); // Create a new row for each item
row.insertCell(0).innerHTML = `${item5}`;
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = '$'+`${price5}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price5}`);


// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
