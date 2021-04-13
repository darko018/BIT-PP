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
console.log(result)


// 2. Write a program that checks if a given number is odd.

function isOdd(number) {
    if(number%2 !== 0) {
        return true;
    } 
        return false;
    }
var result = isOdd(5);
console.log(result)


// 3. Write a program that checks if a given number is a three digit long number.

function threeDigit(num) {
    if (num >=100 && num < 1000) {
        return true;
    } else {
        return false;
    }
}
var result = threeDigit(1000);
console.log(result)


// 4. Write a program that calculates an arithmetic mean of four numbers.

function arithmetic(num1, num2, num3, num4) {
    var res = (num1 + num2 + num3 + num4)/4;
    return res;
}
    var result = arithmetic(34, 44, 56, 78);
console.log(result);


// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****

function square (n){
    var square = '';
    for(var i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            if (i === 0 || i === n - 1){
                square += '* ';
            } else if(j === 0 || j === n - 1){
                square += '* ';
            } else {
                square += '  ';
            }
        }
        square += '\n';
    }

    return square;
}
var square1 = square(5);
console.log(square1)



// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

 function chart(x, y, z) {
  var star = "";
  for (var i = 0; i < x; i++) {
    star += "*";
  }
  star += "\n";
  for (var i = 0; i < y; i++) {
    star += "*";
  }
  star += "\n";
  for (var i = 0; i < z; i++) {
    star += "*";
  }
  return star;
}
console.log(chart(5, 3, 7));  



// 7. Write a program that calculates a number of digits of a given number.

function numOfDigits (num) {
    var digitCounter = 0;

    if (num < 0){
        num *= -1;
}
    for (var i = num; i >= 1; i /= 10){
        digitCounter++;
    }
    return digitCounter;
}
console.log(numOfDigits(100));



// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;


function given(a, e){
var count = 0
for (var i = 0; i < a.length; i++){
    if (a[i] === e){
         count ++;
        }
    }    
    return count; 
}
var result = given(a, e)
console.log(result);



// 9. Write a program that calculates the sum of odd elements of a given array.


function sum(array) {
    var summ = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) summ += array[i];
    }
    return summ;
  }
  
  var someNumbers = [1, -5, 10, 7, -3, 27, -23];
  console.log(sum(someNumbers));

  
  // 10. Write a program that calculates the number of appearances of a letter a in a given string.
  // Modify the program so it calculates the number of both letters a and A.
  function calculator1(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i] === "a" || string[i] === "A") {
        count += 1;
      }
    }
    return count;
  }
  
  var letters =
    " This is a very long string thAt contains letter A and I hate doing this At 2 a.m";
  console.log(calculator1(letters));

  
  // 11. Write a program that concatenates a given string given number of times. For example, if
  // “abc” and 4 are given values, the program prints out abcabcabcabc.
  
  function concatenate(string, number) {
    var total = "";
    for (var i = 0; i < number; i++) {
      total += string;
    }
    return total;
  }
  
  var a = "abc";
  var b = 4;
  console.log(concatenate(a, b));