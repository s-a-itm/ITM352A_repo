// PRINT PRODUCT CARDS
for (let i = 0; i < products.length; i++) {
    document.querySelector('.row').innerHTML += `
        <div class="col-md-6 product_card" style="margin-bottom: 40px; padding: 15px;">
            <div>
                <h5 style="float: left;" class="product_name">${products[i].name}</h5>
                <h5 style="float: right;">$${(products[i].price).toFixed(2)}</h5>
            </div>  
            <img src="${products[i].image}" class="img-thumbnail" alt="${products[i].alt}">
            <div style="height: 90px;">
                <table style="width: 100%; text-align: center; font-size: 18px;" id="product_table">
                    <tr>
                        <td style="text-align: left; width: 35%;">Available: ${products[i].qty_available}</td>

                        <td style="text-align: center; width: 35%;" rowspan="2">
                            <div style="border-radius: 50px; border: 2px solid black; width: 70%; height: 40px; float: right;">
                                <button type="button" class="qtyButton highlight" onclick="document.getElementById('qty${[i]}_entered').value--; checkInputTextbox(qty${[i]}_entered);">--</button>

                                <input type="text" autocomplete="off" placeholder="0" name="qty${[i]}" id="qty${[i]}_entered" class="inputBox" onchange="checkInputTextbox(this)">

                                <button type="button" class="qtyButton highlight" onclick="document.getElementById('qty${[i]}_entered').value++; checkInputTextbox(qty${[i]}_entered);">+</button>
                            </div>

                            <label id="qty${[i]}_label" style="margin: 6px 0; float: right; padding-right: 10px;">Qty:</label>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: left; width: 35%;" id="qty_sold${i}">Sold: ${products[i].qty_sold}</td>
                    </tr>
                    <tr>
                        <td colspan="3" style="padding-top: 5px;"><div id="qty${[i]}_error" style="color: red;"></div></td>
                    </tr>
                </table>
            </div>  
        </div>
    `;
}

// PERFORM CLIENT-SIDE DATA VALIDATION
function isNonNegInt(q, returnErrors = false) {
    errors = []; 
    if ((Number(q) != q) && (q != '')) { 
        errors.push('Please enter a number value.');
    } 
    else 
    {                
        if ((parseInt(q) == q) && (q >= 0)) {
            for (let i in products){
                let input = document.getElementById(`qty${[i]}_entered`).value;
                if ((input > 0) && (input > products[i].qty_available)) {
                    errors.push(`We do not have ${q} available.`);
                    let extra = q - products[i].qty_available;
                    
                    document.getElementById(`qty${[i]}_entered`).value = q - extra;
                } 
            }      
        }
        if (q < 0)  {
            errors.push('Please enter a positive value.'); 

        } else if ((parseInt(q) != q) && (q != 0)) {
            errors.push('Please enter an integer value.');
        }
    }
    return (returnErrors ? errors : (errors.length == 0));
}

// CHECK INPUT BOXES AGAINST DATA VALIDATION FUNCTION
// Remove leading 0's
function checkInputTextbox(textBox) {
    str = String(textBox.value);
    if (str.charAt(0) == 0) {
        textBox.value = Number(str.slice(0, 0) + str.slice(1, str.length));
    }
    errors = isNonNegInt(textBox.value, true);
    document.getElementById(textBox.name + '_error').innerHTML =  errors.join('');

    if (errors.length != 0) {
        document.getElementById(textBox.name + '_entered').parentElement.style.borderColor = "red";
    }
    else {
        document.getElementById(textBox.name + '_entered').parentElement.style.borderColor = "black";
    }
    
};


// STICKY NAV BAR: Referenced from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
window.onscroll = function() {stickyNav()};

// Get the navbar using its id
let navbar = document.getElementById("sticky-navbar");

// offsetTop returns the top position relative to the parent (documentation: https://www.w3schools.com/jsref/prop_element_offsettop.asp)
    // The parent of navbar is body
let sticky = navbar.offsetTop;

function stickyNav() {
    // pageYOffSet returns the pixels a document has scrolled from the upper left corner of the window
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}