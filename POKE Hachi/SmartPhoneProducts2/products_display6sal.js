//define name and push it to the DOM in the header
const first_name = "Sal";
const last_name = "Aurigemma";

// Manipulate the header to display your name with formatting
first_name_span.innerHTML= first_name;
last_name_span.innerHTML= last_name+"'s";
top_title.innerHTML=("Used Smart Phone Store");


//send store name info to the footer title
const store_name="Sal";//kept from earlier instructions, could replace with first_name
//create variables to push to the DOM for current year and time
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

let hits= 0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
    if(element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }
     
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress;
/*    if ( hits_spins_ratio > 0 ) {
        progress = 'On your way!';
        if ( hits_spins_ratio >= 0.25 ) {
            progress = 'Almost there!';
            if ( hits_spins_ratio >= 0.5 ) {
                if( hits < spins) { 
                    progress = 'You win!';
                }
            }
        }
    }
    else {
        progress = 'Get going!' ;
    } */

    if ( hits_spins_ratio >= 0.5 ) {
        if (hits<spins){
            progress='You win!';
        }
    } else if(hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
    } else if(hits_spins_ratio>0) {
        progress='On your way!';
    }
    else {
        progress = 'Get going!';
    }
        win_span.innerHTML=progress;
}
function resetClassName(element) {
    if(element.className=='item rotate'){
        element.className = 'item';
        hits=hits+=2;
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
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}
