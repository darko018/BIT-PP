// 1.Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

function duplicate(arr) {
    var b = [];
   
   for(var i = 0; i < arr.length; ++i){
     b.push(arr[i]);
     b.push(arr[i]);
   }
    var arr = b;
    return b;
} 

var arr = [2, 4, 7, 11, -2, 1];
console.log(duplicate(arr));


// 2.Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index).sort(function(a, b) {
        return a - b;
    });
}
console.log(removeDuplicates(arr));


/* 3. a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function oddNumber(a){
  
    if(a.length %2 === 0){
      return false;
    }
    else{
      return true;
    }
  };
  var a = [1, 2, 9, 2, 1];
  console.log(oddNumber(a));
  
  
  var b = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
   function middSmalerElemets(b){
    elements = [];
    function middElement(b){
      if(b.length %2 === 0){
        return 'error';
      }
      else{
        c = (b.length + 1)/2
        return c - 1;
      }
    }
     for(var i = 0; i < b.length;i ++){
       if(b[i] < b[middElement(b)]){
         elements.push(b[i]); 
       }
       
     }return elements.length;
   }
   console.log(middSmalerElemets(b));
  

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */

var a = [1, 4, -2, 11, 8, 1, -2, 3];

function minValue(a) {
  return Math.min.apply( Math, a);
}

function indexOfSmallest(a) {
  return a.lastIndexOf(minValue(a));
 }

console.log(minValue(a));
console.log(indexOfSmallest(a));


// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

//------------- a ---------------\\

var someArray = [2, 3, 8, -2, 11, 4];
function lessGiven(array, value) {
  var output = array.filter(function (element) {
    return element < value;
  });
  return output;
}

var outputA = lessGiven(someArray, 6);
console.log(outputA);


//------------- b ---------------\\

var someArray = ["JavaScript", "Programming", "fun", "product"];

function findSubstringElement(array, string) {
  var output = [];
  var modArray = array.slice();
  modArray = modArray.map(function (value) {
    return value.toUpperCase();
  });
  for (var i = 0; i < array.length; i++) {
    if (modArray[i].slice(0, string.length) === string.toUpperCase()) {
      output.push(array[i]);
    }
  }
  return output;
}

var outputB = findSubstringElement(someArray, "pro");
console.log(outputB);


// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.
// 

// a //

var listOfProducts = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

// b //
function getTotalPrice(params, prop) {
  var sum = 0;
  for (var i in params) {
    sum += params[i][prop];
  }
  return sum;
}
console.log("Total price: ", getTotalPrice(listOfProducts, "price"));

// c //

function getAveragePrice(params) {
  var sum = 0;
  for (var i in params) {
    sum += params[i].price;
  }
  return sum / params.length;
}
console.log("Average price: ", getAveragePrice(listOfProducts));

// d //

function getMostExpensive(params) {
  var mostExpensive = params[0].price;
  for (var i in params) {
    if (params[i].price > mostExpensive) {
      mostExpensive = params[i].price;
    }
  }
  return mostExpensive;
}
console.log("Most expensive price :", getMostExpensive(listOfProducts));


// 7.
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).


// a \\

function isAllCapital (string) {
    var capitalString = string.toUpperCase(); 
    return string === capitalString;
}

var myString = "Javascript";
var result = isAllCapital(myString);
console.log(result);

// b \\

var stringNumber = "Hell0 W0rld";

function hasNumber (string) {
    var output = false;
    for (var i = 0; i < string.length; i++) {
        if (!isNaN(i)) {
            output = true;
        }
    };
    return output;
}
var output = hasNumber(stringNumber);
console.log(output)

// c \\

function checkIfStringIsValidHexadecimalColor(string) {
  var result = true;
  if (string[0] != "#") {
      result = false;
      return result;
  }
  if (string.length < 4 || string.length > 7) {
      result = false;
      return result;
  }
  //for (var i = 0; i < string.length - 1; i++) {
      //if (string[i + 1] == ("A" || "a" || "B" || "b" || "C" || "c" || "D" || "d" || "E" || "e" || "F" || "f")) {
       //   string1 += string[i + 1];
     // }
    //  console.log("string1: " + string1);
  //}
  //if (string1 == string) {
   //   result = true;
 // } else {
    //  result = false;
  //}

  var listOfValid = ['a', 'b', 'c', 'd', 'e', 'f', "1", "2" ];

  var stringWithoutHashTag = string.split('#')[1];
  if(!isFinite(Number("0x" + stringWithoutHashTag))) {
      result = false;
  }
//   //  stringWithoutHashTag.split("").forEach(function (elem){
//    //     var indexOfCurrent = listOfValid.indexOf(elem.toLowerCase());
//    //     console.log(elem, indexOfCurrent);
//    //     if(indexOfCurrent === -1){
//     //        result = false;
//    //     }
//   //  });

    return result;
  }
  console.log(checkIfStringIsValidHexadecimalColor("#AACCFF"));
  console.log(checkIfStringIsValidHexadecimalColor("#AZ00FF"));


// d \\  
  
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

