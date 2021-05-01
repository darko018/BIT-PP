// 1.Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

function countVowels(string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u" ||
        string[i] === "A" ||
        string[i] === "E" ||
        string[i] === "I" ||
        string[i] === "O" ||
        string[i] === "U"
      ) {
        counter++;
      }
    }
    return counter;
  }
console.log(countVowels("Write a function to count vowels in a provided string"));


// 2.Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function alternatinglyArray(array1, array2) {
    var result = [];
    var finalarray = 0;
    if (array1.length > array2.length) {
        finalarray = array1.length;
    } else {
        finalarray = array2.length;
    }
  
    for (var i = 0; i < finalarray; i++) {
      if (i < array1.length) {
        result[result.length] = array1[i];
      }
      if (i < array2.length) {
        result[result.length] = array2[i];
      }
    }
    return result;
  }
console.log(alternatinglyArray(["a", "b", "c"], [1, 2, 3]));


// 3.Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateArray(array, k) {
    var result = [];
    for (var i = k, j = 0; i < array.length + k; i++) {
      if (i >= array.length) {
        result[result.length] = array[j];
        j++;
      } else {
        result[result.length] = array[i];
      }
    }
    return result;
  }
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));


// 4.Write a function that takes a number and returns array of its digits.

function returnArray(number) {
    var result = [];
    var digit;
    var numString = "" + number;
    for (i = 0; i < numString.length; i++) {
      digit = parseInt(numString[i]);
      result[result.length] = digit;
    }
    return result;
  }
console.log(returnArray(12345));


// 5.Write a program that prints a multiplication table for numbers up to 12.

function multiTable() {
    var table = "";
    var line = "\n";
    var sum;
    for (var i = 1; i <= 12; i++) {
      for (var j = 1; j <= 12; j++) {
        sum = i * j;
        table += i + " * " + j + " = " + sum + "\n";
      }
      table += line;
    }
    return table;
  }
console.log(multiTable());


// 6.Write a function to input temperature in Centigrade and convert to Fahrenheit.

function centigradeToFahr(temperature) {
    var result;
    Fahrenheit = temperature * 1.8 + 32;
    result = temperature + " degrees Centrigrade is " + Fahrenheit + " degrees Fahrenheit."
    return result;
}
console.log(centigradeToFahr(19));


// 7.Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function maxInArray(array) {
    maxNum = -Infinity;
    for (i = 0; i < array.length; i++) {
      if (!isNaN(array[i])) {
        if (array[i] > maxNum) {
          maxNum = array[i];
        }
      }
    }
    return maxNum;
  }
console.log(maxInArray([-3, false, NaN, null, 11, 0, 29.5, 9, 2, 245, 99]));


// 8.Write a function to find the maximum and minimum elements. Function returns an array.

function maxAndMinFromArray(array) {
    maxNum = -Infinity;
    minNum = Infinity;
    for (i = 0; i < array.length; i++) {
      if (!isNaN(array[i] && array[i] !== null)) {
        if (array[i] > maxNum) {
          maxNum = array[i];
        } else if (array[i] < minNum) {
          minNum = array[i];
        }
      }
    }
    return [minNum, maxNum];
  }
console.log(maxAndMinFromArray([-3, false, NaN, 11, 29.5, 9, 2, 245, 99]));


// 9.Write a function to find the median element of array.

function medianOfArray(array) {
    var result;
    if (array.length % 2 === 0) {
      result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
      return result;
    } else {
      result = array[array.length / 2 - 0.5];
      return result;
    }
  }
console.log(medianOfArray([1, 2, 3, 4, 5,]));


// 10.Write a function to find the element that occurs most frequently.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFreqItem(array) {
    var mostFrequent;
    var counter = 0;
    var maxCounter = 0;
    for (var i = 0; i < array.length; i++) {
      maxCounter = 0;
      for (var j = 0; j < array.length; j++) {
        if (array[j] === array[i]) {
          maxCounter++;
        }
        if (maxCounter > counter) {
          counter = maxCounter;
          mostFrequent = array[j];
        }
      }
    }
    return mostFrequent;
  }
console.log(mostFreqItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));


// 11.Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function firstMiddleLast(array) {
    var first = array[0];
    var last = array[array.length - 1];
    var mid;
    var result;
    if (array.length % 2 !== 0) {
      mid = array[array.length / 2 - 0.5];
      result = first + " " + mid + " " + last;
      return result;
    } else {
      result = first + " " + last;
      return result;
    }
  }
console.log(firstMiddleLast([1, 2, 3, 4, 5]));


// 12.Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function findAverage() {
    var sum = 0;
    var average;
    for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    average = sum / arguments.length;
    return average;
  }
console.log(findAverage(3, 4, 5, 20));


// 13.Write a function to find all the numbers greater than the average.

function average(nums) {
    var sum = 0;
    var avrg;
    for (i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    avrg = sum / nums.length;
    return avrg;
  }
  
  function greaterThenAverage() {
    var result = [];
    var avrg = average(arguments);
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i] > avrg) result[result.length] = arguments[i];
    }
    return result;
  }
console.log(greaterThenAverage(1, 2, 1, 4, 5));


// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40

function bmi(weight, height) {
    var result = weight / (height * height);
    var message;
    switch (true) {
      case result < 15:
        message = "Starvation: less than 15";
        break;
      case result < 17.5 && result >= 15:
        message = "Anorexic: less than 17.5";
        break;
      case result < 18.5 && result >= 17.5:
        message = "Underweight: less than 18.5";
        break;
      case result < 25 && result >= 18.5:
        message = "Ideal: greater than or equal to 18.5 but less than 25";
        break;
      case result < 30 && result >= 25:
        message = "Overweight: greater than or equal to 25 but less than 30";
        break;
      case result < 40 && result >= 30:
        message = "Obese: greater than or equal to 30 but less than 40";
        break;
      case result >= 40:
        message = "Morbidly obese: greater than or equal to 40";
        break;
    }
    return message;
  }
console.log(bmi(99, 1.77));


// 15.Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function listOfStrings(array) {
    var max = 0;
    var frame = "";
    var inFrame = "";
    var output = "";
  
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > max) {
        max = array[i].length;
      }
      inFrame += "* " + array[i] + " *" + "\n";
    }
    for (var j = 0; j < max + 6; j++) {
      frame += "*";
    }
    output = frame + "\n" + inFrame + frame;
    return output;
  }
console.log(listOfStrings(["Hello", "World", "in", "a", "frame"]));

