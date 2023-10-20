function updateQuantityMessage(textbox) {
    let quantityMessage = document.getElementById('qty_textbox_message');

    // Validate the quantity by calling the validateQuantity function and providing the textbox as the input parameter
    //note that I am using Number(textbox.value) because, by default, textbox's provide strings, not numbers, and sometimes
    // js does not help us with it's loose typing
    let validationMessage = validateQuantity(Number(textbox.value));
  
    // If there are validation errors, an error message
    if (validationMessage !== "") {
        quantityMessage.innerHTML = validationMessage;
    } else {
        quantityMessage.innerHTML = textbox.value;
    }    
}

function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer";
            break;
        case quantity < 0:
            errorMessage = "Negative inventory";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }

    return errorMessage;
}