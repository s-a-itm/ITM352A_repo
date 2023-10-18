1. Create a directory named Invoice1.

2. Create two files in the Invoice1 directory:
   - invoice.html (for HTML structure)
   - invoice.js (for JavaScript logic)

3. In invoice.html:
   - Create an HTML structure for the invoice table.
   - Include a placeholder for the product rows (tbody).
   - Include placeholders for subtotal, tax, and total cells.
   - Link the invoice.js script.

4. In invoice.js:
   - Define variables for each product (item1, quantity1, price1, etc.).
   let item1=...;
   let quantity1= ...;
   - Calculate extended prices for each product (extended_price1, extended_price2, etc.).
   - Calculate the subtotal by adding extended prices.
   - Calculate the tax amount using the tax rate.
   - Calculate the total by adding the subtotal and tax amount.
   - Use DOM manipulation to add product rows dynamically to the table.
   - Set the values of subtotal, tax, and total cells in the table.

5. Save both invoice.html and invoice.js in the same directory (Invoice1).

6. Open invoice.html in a web browser to view the generated sales receipt.

7. Kind of ugly, probably. Create a css file to make the table nicer
   - Link the css file in the html file