
//define and send store name info to the DOM
const store_name="Sal";
header_title.innerHTML=(store_name + "'s Used Smart Phone Store");
footer_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");

//initialize initial variables
let hits= 0;
let spins=0;
let over_half=false;

//send hits and spins values to the DOM for display
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
    //change  the item class name to item rotate to allow the 
    //css code to rotate the image
    element.className = 'item rotate';
    //increment spins on every mousover event
    spins_span.innerHTML = spins++; 
    //send the number of hits / spins to the webpage
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2);

    if (spins<(2*hits)&&hits>spins){
    //win_span.innerHTML=true;
    over_half=true;
    win_span.innerHTML=over_half;
    }
    else {
    //win_span.innerHTML=false;
    win_span.innerHTML=over_half;
    }
}

function resetClassName(element) {
    if (element.className=='item rotate') {
        hits=hits+=2;
        element.className = 'item';
    }
    else {
        element.className = 'item';
    }
    //element.className = 'item';
    //hits=hits+=2;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2);
    if (spins<(2*hits)&&hits>spins){
    //win_span.innerHTML=true;
    over_half=true;
    win_span.innerHTML=over_half;
    }
    else {
    //win_span.innerHTML=false;
    win_span.innerHTML=over_half;
    }
    /*
    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits / spins;
    if (hits_spins_ratio > 0) {
        progress = 'On your way!';
        if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
            if (hits_spins_ratio >= 0.5) {
                if (hits < spins) {
                    progress = 'You win!';
                }
            }
        }
    } else {
        progress = 'Get going!';
    }
    */
    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    if (hits_spins_ratio >= 0.5&& (hits<spins)) {
        progress = 'You win!';
    } else if(hits_spins_ratio >= 0.25){
    progress = 'On your way!';
    } else if (hits_spins_ratio > 0) {
    progress = 'Almost there!';
    } else {
        progress = 'Get going!';
    }
    // Set the win_span with the progress message
    win_span.innerHTML = progress;
}     