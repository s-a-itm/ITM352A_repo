//starting with POKE6

// Calculate shipping based on sub-total
shippingCharge = 0 //initilizes to zero

if subtotal <= 50:
    shippingCharge = 2
else if subtotal <= 100:
    shippingCharge = 5
else:
    shippingCharge = subtotal * 0.05  // 5% of the subtotal

// Calculate total including shipping
total = subtotal + taxAmount + shippingCharge

// Populate the table rows using DOM manipulation (unchanged)

// Add a new row for shipping to html
    '<td colspan="3">Shipping</td>' +
    '<td id="shipping_cell"></td>'

// Set the total cell in bold... already done in POKE6 css
