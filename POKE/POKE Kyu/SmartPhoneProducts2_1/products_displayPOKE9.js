//define store name and push it to the DOM in the top title
const first_name = "Sal";
const last_name = "Aurigemma's";
const store_name="Sal";//kept from earlier instructions, could replace with first_name
//create variables to push to the DOM for current year and time

 // Manipulate the header to display your name with formatting
 const firstNameSpan = document.getElementById('first_name_span');
 const lastNameSpan = document.getElementById('last_name_span');
 firstNameSpan.textContent = first_name;
 lastNameSpan.textContent = last_name;

//const store_name="Sal"; //changed in lab5 part 7
top_title.innerHTML=("Used Smart Phone Store");


//initialize hits and spins and send to the DOM
let hits= 0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;


//this is the code for POKE. Start by defining the items, prices, images in objects
// Define product information objects
const product1 = {
    name: "HTC",
    price: 40.00,
    image: "images/HTC.jpg"
};

const product2 = {
    name: "Apple",
    price: 75.00,
    image: "images/iphone-3gs.jpg"
};

const product3 = {
    name: "Nokia",
    price: 35.00,
    image: "images/Nokia.jpg"
};

const product4 = {
    name: "Samsung",
    price: 45.00,
    image: "images/Samsung.jpg"
};

const product5 = {
    name: "Blackberry",
    price: 10.00,
    image: "images/Blackberry.jpg"
};

// Create an array to hold all the product objects
const products = [product1, product2, product3, product4, product5];

// Get a reference to the main element
//const mainElement = document.querySelector('.main');

//loop through the product array
for (let i = 0; i < products.length; i++) {
    const product = products[i]; //dummy variable to push data to the DOM from array
    document.querySelector('.main').innerHTML += `
        <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <img src="${product.image}" />
        </section>`;
}


//send store name info to the footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");            
//send store name info to the footer title

const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//create an html template for the footer table, using backtic instead of quotes
/* This HTML table represents a footer section with key information. It includes a header cell with stylized text, followed by rows containing copyright details, the current year, and the current time. Dynamic values are inserted using JavaScript variables for a personalized and up-to-date footer. */
const footerTable = `
    <table>
        <tr>
            <td></td>
            <td class="table-header">Your One Stop For Used Phones - ${first_name.charAt(0).toUpperCase()}.${last_name.charAt(0).toUpperCase()}'s</td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Copyright @ ${first_name} ${last_name}</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>${currentYear}</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>${currentTime}</td>
        </tr>
    </table>
`;

// Set the innerHTML of the bottom_title element to the generated table
bottom_title.innerHTML = footerTable;

//this should be two functions or more but... it changes the item name to rotate for the images and updates the spin count and calculates hits/spins ratio, sending both to the DOM
function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1;
        element.className = 'item rotate';
    } 
        
    //spins=spins+1; 
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
}

//this should be two functions or more but... it changes the item name by removing the rotate for the images and updates the hits count and calculates hits/spins ratio, sending both to the DOM
function resetClassName(element) {
    if(element.className=='item rotate'){
        hits=hits+=2; 
        element.className = 'item';
    } else {
        changeClassName(element);
    }
        
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=(hits_span.innerHTML/spins_span.innerHTML).toFixed(2);
}



    