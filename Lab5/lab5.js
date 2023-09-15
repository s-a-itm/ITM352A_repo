let age=53;
let fav_num=53;
//don't use 1 and 1 for the next two variables because... math
let day_of_birth=15;
let month_of_birth=5;
let calculation1=age + fav_num / day_of_birth * month_of_birth;
let calculation2=(age + fav_num) / day_of_birth * month_of_birth;
document.getElementById("result1").innerHTML = calculation1;
document.getElementById("result2").innerHTML = calculation2;