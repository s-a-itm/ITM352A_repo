function updateQuantityMessage(theTextBox) {
    let quantityMessage = document.getElementById('qty_textbox_message');

    // Validate the quantity by calling the validateQuantity function and providing the textbox as the input parameter
    let validationMessage = validateQuantity(Number(theTextBox.value));

    // If there are validation errors, display an error message
    if (validationMessage !== "") {
        quantityMessage.innerHTML = validationMessage;
    } else {
        quantityMessage.innerHTML = theTextBox.value;
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

function displayPurchase() {
    //get the quantity from the web page and force it to be a number for evaluation
    let quantity = Number(document.getElementById('qty_textbox').value);
    //sets up a dummy variable to receive the output of the validation function
    let validationMessage = validateQuantity(quantity);

    if (validationMessage === "") {
        // if there is no error (blank error message), create a new message for the "Thank you" page
        let message = `Thank you for ordering ${quantity} things!`;

        // Replace the current page content with the new message
        document.body.innerHTML = message;
    } else {
        // Display the validation error message
        alert(validationMessage + ". Please try again.");
        //blank out the textbox
        document.getElementById('qty_textbox').value="";
    }
}