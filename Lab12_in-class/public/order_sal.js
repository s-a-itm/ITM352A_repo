window.onload = function() {
    // Check for 'error' and 'qty_textbox' in the query string
    let params = (new URL(document.location)).searchParams;
    let error = params.get('error');
    let quantityTextboxValue = params.get('qty_textbox');

    if (error) {
        document.getElementById("errorMessage").innerText = error;
    }

    document.getElementById("productDetails").innerText = `${products[0]["brand"]} at $${products[0]["price"]}`;

    let productsSoldText = "";
    for (i in products) {
        productsSoldText += `<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`;
    }
    document.getElementById("productsSold").innerHTML = productsSoldText;

    if (quantityTextboxValue) {
        document.getElementById("qty_textbox").value = quantityTextboxValue;
    }
}
