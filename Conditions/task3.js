
var num = 25;
var result = '';

if (num % 3 === 0) {
   if (num % 5 === 0) {
       result = num + ' is divisble by 3 and 5 ';

    } else 
        result = num + ' is not divisble by 3 but not with 5 ';
    
    } else {
        result = num + ' is not divisble by 3 and but is divisable by 5 ';
    } 
console.log(result);
