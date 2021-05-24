// 1. Write a program that calculates the maximum of two given numbers.

function maximum(number1, number2) {
    if (number1 > number2){
        return number1;
    }  if (number2 > number1){
        return number2;
    }
    return 'Numbers are equal'
}
var result = maximum(15, 10);
console.log(result);


function detectBrowser(userAgent){
    var chrome  = /.*(Chrome\/).*(Safari\/).*/g;
    var firefox = /.*(Firefox\/).*/g;
    var safari  = /.*(Version\/).*(Safari\/).*/g;
    var opera   = /.*(Chrome\/).*(Safari\/).*(OPR\/).*/g
  
    if(opera.exec(userAgent))
      return "Opera"
    if(chrome.exec(userAgent))
      return "Chrome"
    if(safari.exec(userAgent))
      return "Safari"
    if(firefox.exec(userAgent))
      return "Firefox"
  }
  console.log(detectBrowser);