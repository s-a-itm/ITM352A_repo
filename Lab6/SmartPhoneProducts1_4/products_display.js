//define store name and push it to the DOM in the top title
const store_name="Sal";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");

//send store name info to the footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");            

//initialize hits and spins and send to the DOM
let hits= 0;
let spins=0;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//this should be two functions or more but... it changes the item name to rotate for the images and updates the spin count and calculates hits/spins ratio, sending both to the DOM
function changeClassName(element) {
    element.className = 'item rotate';
    spins=spins+1; 
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
}

//this should be two functions or more but... it changes the item name by removing the rotate for the images and updates the hits count and calculates hits/spins ratio, sending both to the DOM
function resetClassName(element) {
    element.className = 'item';
    hits=hits+=2; 
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=(hits_span.innerHTML/spins_span.innerHTML).toFixed(2);
}


    