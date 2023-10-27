const express = require('express');
const app = express();
const qs = require('querystring');

// Monitor all requests
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

const products = require(__dirname + "/products.json");

app.get('/products.js', function(request, response, next) {
	response.type('.js');
	let products_str = `let products = ${JSON.stringify(products)};`;
	response.send(products_str);
});

// Add a qty_sold variable for each product 
for (let i in products) {
	products.forEach((prod, i) => {prod.qty_sold = 0});
}

// Add the expres smiddleware urlencoded so the POST data can be decoded from the browser body
app.use(express.urlencoded({extended: true}));


// Respond to a POST method to the path /process_purchase (from products_display)
app.post("/process_purchase", function(request, response) {
	// POST the content of the request route
	let POST = request.body;

	// Assume that input boxes are all empty
	let has_qty = false;

	// Create an object to store error messages
	let errObj = {};

	for (let i in products) {
		// Retrieve the user's quantity inputs
		let qty = POST[`qty${[i]}`];

		// If all input boxes are empty, push an error and create a flag
		has_qty = has_qty || (qty > 0);

		// If an invalid quantity was submitted, set the name=value pairs in errObj as the errMsg
		if (isNonNegInt(qty, false) == false) {
			// Store error in errObj to pass in URL
			errObj[`qty${[i]}_error}`] = isNonNegInt(qty, true);
		}
	}

	// If all input boxes are empty and there are no errors
	// Append no_selection to response URL
	if (has_qty == false && Object.keys(errObj).length == 0) {
		errObj['no_selection'];
		response.redirect("./products_display.html?" + qs.stringify(POST) + `&inputErr&` + qs.stringify(errObj));
	}
	// If there is an input and there are no errors
	else if (has_qty == true && Object.keys(errObj).length == 0) {
		for (let i in products) {
			let qty = POST[`qty${[i]}`];

			products[i].qty_sold += Number(qty); 

			products[i].qty_available = products[i].qty_available - qty;

			response.redirect("./invoice.html?" + qs.stringify(POST));
		}
	}
	else if (Object.keys(errObj).length > 0) {
		response.redirect("./products_display.html?" + qs.stringify(POST) + `$inputErr&` + qs.stringify(errObj));
	}
})

function isNonNegInt(q, returnErrors = false) {
    errors = []; 
    if ((Number(q) != q) && (q != '')) { 
        errors.push('Please enter a number value.');
    } 
    else 
    {        
        if (q < 0)  {
            errors.push('Please enter a positive value.'); 

        } else if ((parseInt(q) != q) && (q != 0)) {
            errors.push('Please enter an integer value.');
        }
    }
    return (returnErrors ? errors : (errors.length == 0));
}

// Route all other GET requests to files in public 
app.use(express.static(__dirname + '/public'));

// Start server
app.listen(8080, () => console.log(`listening on port 8080`));