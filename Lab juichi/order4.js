//order4.js
function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }

    return errorMessage;
}

function processOrder() {
    
    //let params= (new URL(document.location)).searchParams;
    //let quantity = Number(params.get("qty_textbox"));

    let quantityTextbox = document.querySelector('input[name="qty_textbox"]');
    let quantity = Number(quantityTextbox.value);
    let validationMessage = validateQuantity(quantity);

    if (validationMessage === "") {
        let message = `Thank you for ordering ${quantity} things!`;
        
        //rewrites the DOM page 
        innerHTML = message;
        document.body.innerHTML = message;

        // Stop the form submission (preventing page reload)
        return false;
    } else {
        // Clear the quantity textbox
        //quantityTextbox.value = "";
        
        // Display the validation error message on the page
        document.getElementById('purchaseResult').innerHTML = validationMessage;
        return false;
    }
}