
//declaring variables per instructions
let age=53; //my current age
let fav_num=22;
let day_of_birth=5;
let month_of_birth=9;

/* do two calculations with same variables using
different precedence to show how precedence works */

let calculations1 =age + fav_num / day_of_birth * month_of_birth;

let calculations2 = (age + fav_num) / day_of_birth * month_of_birth;

//send results of calculations to the web page
document.getElementById("result1").innerHTML = calculations1;

document.getElementById("result2").innerHTML = calculations2;