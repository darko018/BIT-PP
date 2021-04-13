// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var a = [5, -4.2, 18, 7];
var e = 3;
var result = 'no';

for (var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        result = "yes";
        break;
    }
}
console.log(result);



// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i]*=2;
    }
}
console.log (a);



// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var a = [4, 2, 2, -1, 6];
var min = a[0];
var index = 0;

for (var i = 0; i < a.length; i++){
    if (a[i] < min){
        min = a[i]; 
        index = i;
    }
}
console.log(min +',\t' + index);



// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var array = [4, 2, 2, -1, 6];
var min = Infinity;
var min2 = Infinity;

for(var i = 0; i < array.length; i++) {
    if(min > array[i]) {
        min2 = min;
        min = array[i];
    } else if (min2 > array[i]){
        min2 = array[i];
    }
}
console.log(min2);



// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var array = [3, 11, -5, -3, 2];
var result = 0;

for (var i = 0; i < array.length; i++){
    if (array[i] > 0){
        result = result + array[i];
    }
}
console.log(result);



// 6.Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

var array = [2, 4, -2, 7, -2, 4, 2];
var output;

for(var start = 0, end = array.length-1; start < end; start++, end--) {
    if (array[start] === array[end]){
        output = 'The array is symmetric';
    } else {
        output = 'The array isn’t symmetric';
    }
}
console.log(output);


// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];


for (var i = 0; i < array1.length; i++ ) {
    newArray[newArray.length] = array1[i];
    newArray[newArray.length] = array2[i];
}
console.log(newArray);



//8. Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9].

var array = [4, 5, 6, 2];
var array1 = [3, 8, 11, 9];
var newArray = [];

for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i];
}

for (var i = 0; i < array.length; i++) {
    newArray[newArray.length] = array1[i]; 
}
console.log(newArray);



// 9.Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var array = [4, 6, 2, 8, 2, 2];
var e = 2;

for(var i =0; i < array.length; i++){
    if ()
}




