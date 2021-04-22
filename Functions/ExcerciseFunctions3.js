// 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertStringToPosition(string, insertion, position) {
    var result = [];
    position = position || 1;
    if (position === 1) {
        return insertion + string;
    }
    for (i = 0; i < string.length; i++) {
        if (i === position) {
            result += insertion;
        } result += string[i];
    } return result;
}
console.log(insertStringToPosition("My random string", "JS "));
console.log(insertStringToPosition("My random string", "JS ", 10));

//  2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElements (array) {
    var result = []; 
    for (var i = 0; i < array.length; i++) {
        var num = parseFloat (array[i]);  //parseFloat filtrira samo brojeve a sve ostalo je NaN num = [1, 21, NaN, 42, 1000, Infinity ]
        if (isFinite(num)) { 
            result[result.length] = num;   
        }
    } return result;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// 3.Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function falsyValues (array) {
    var result = [];
    for ( var i = 0; i < array.length; i++) {
        if (parseInt(array[i])) {
            result [result.length] = array[i];
        }
    } return result
}
console.log (falsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null]));


// 4.Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

var a = 12345;

function reverseNumbers(numb) {
    var result = 0;
    while(numb !== 0) {
        result *= 10; 
        result += numb % 10;  
        numb = numb - numb % 10; 
        numb = numb / 10; 
    }
    return result;
}
console.log(reverseNumbers(a));


asdasd
// 5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

var array = [7, 9, 0, -2];
var num = 2;

function lastElement(array, num) {
  a = num || 1;
  var newArray = [];
  var j = 0;
  for (var i = array.length - a; i < array.length; i++) {
    newArray[j] = array[i];
    j++;
  }
  return newArray;
}
var func = lastElement(array, num);
console.log(func);