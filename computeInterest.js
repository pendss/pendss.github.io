/********************************************
PROGRAM DESCRIPTION: 
	SIMPLE INTEREST CALCULATOR



PRINCE ALFRED A. GANAYO
2015-65488
EF-5L
AUGUST 18,2017
********************************************/
"use strict";
function calculate(year,month,principal){
  var month_to_year = month/12;  // convert months to years
  var time = year + month_to_year; // get the total of the inputted year and the converted month
  var rate = 0.0475;  // rate of interest
  var interest = principal*rate*time; //interest formula
  var compute = principal + interest; //compute for the total amount of the principal and the interest
  console.log("At 4.75%, the total due for P" + principal + " after " + year + "years and " + month + "months is P" + compute);
  
}
calculate(4,3,10000);  // function calls
calculate(2,9,17000);
calculate(3,0,14500);
