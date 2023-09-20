//declare variables per lab 5.1 instructions
let age=53;
let fav_num=7; //not my real fav number
let day_of_birth=8;
let month_of_birth=11;

// define calculation
let calc1 = age + fav_num / day_of_birth * month_of_birth;
let calc2 = (age + fav_num) / day_of_birth * month_of_birth;

/* PEMDAS
Please
Excuse
My 
Dear
Aunt
Sally 

Parentheses
Exponent
Mult
Div
Add
Subtract */

// output calc 1 & 2 to the DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;