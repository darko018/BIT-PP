// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

var a = ["1", "21", undefined, "42", "1e+3", Infinity];

function nonNumeric (array) {
    var result = []; //treba ti niz kao rezultat, pa zato stavljas prazan niz
    for (var i = 0; i < array.length; i++) {
        var num = parseFloat (array[i]);  //parseFloat filtrira samo brojeve a sve ostalo je NaN num = [1, 21, NaN, 42, 1000, Infinity ]
        if (isFinite(num)) { // === true
            result[result.length] = num;   // 1 === 0 index

        }
    } return result;
}

console.log(nonNumeric(a));



// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”


var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var result = "";
for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i] != null) {
        result += array[i];
    }
}

console.log(result);



// 3. Write a program to filter out falsy values from the array.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function falsyValues (array) {
    var result = [];
    for ( var i = 0; i < array.length; i++) {
        if (parseInt(array[i])) {
            result [result.length] = array[i];
        }
    } return result
}
console.log (falsyValues(array));



// 4. Write a program that calculates a number of integer values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function calculate (array){
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if (parseInt(array[i]) === parseFloat(array[i])){   // parseInt gives out [23, 15, -22, 4, 7], 
                                                            // parseFloat gives out [23.1, 15, -22.5, 4, 7] 
        count ++;
        }
    }return count; 
}
console.log(calculate(array));



// 5. Write a program that calculates a number of float values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function floatValues(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if ((parseFloat(array[i]) !== parseInt(array[i])) && !isNaN(parseFloat(array[i]))) {
            count ++;
        }
    } return count;
}
console.log(floatValues(array));
    



