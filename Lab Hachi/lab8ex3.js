// Define the product_quantities array
let product_quantities = [2, 1, 1, 1, 1]; 

/* commmented out for lab 8 task 3.2
// Iterate through product_quantities and print each element in a table
document.write("<table>");
document.write("<tr><th>Product #</th><th>Quantity</th></tr>");
for (let i = 0; i < product_quantities.length; i++) {
    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); // Product #
    document.write("<td>" + product_quantities[i] + "</td>"); // Quantity
    document.write("</tr>");
}
document.write("</table>");
*/ 
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

    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); // Product #
    document.write("<td>" + product.name + "</td>"); // Name
    document.write("<td>" + product.price.toFixed(2) + "</td>"); // Price
    document.write("<td>" + quantity + "</td>"); // Quantity
    document.write("<td>" + extended_cost.toFixed(2) + "</td>"); // Extended Cost
    document.write("</tr>");
}
document.write("</table>");