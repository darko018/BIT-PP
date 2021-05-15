// 1.Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

function doubleValues(array) {
    var newArray = [];
    array.forEach(function (el) { newArray.push(el, el); });    
    return newArray;
  }
console.log(doubleValues([2, 4, 7, 11, -2, 1]));

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