"use strict";
function calculate(year,month,principal){
  var month_to_year = month/12;
  var time = year + month_to_year;
  var rate = 0.0475;
  var interest = principal*rate*time;
  var compute = principal + interest;
  
  return compute;
  
}

console.log("The total amount is " + calculate(4,3,10000));
console.log("The total amount is " + calculate(2,9,17000));
console.log("The total amount is " + calculate(3,0,14500));
