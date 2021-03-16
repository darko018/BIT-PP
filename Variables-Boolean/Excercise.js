                      // Variable declaration and initialization //


// 1. Create several variables using different letter cases and beginning characters. Check if they
// still exist if you refer to them in different case - does case matter here? Try to declare a variable
// starting with number as the first character. 

var kids = 2;
var Kids = 5;
var KidS = kids * Kids;

console.log(KidS);

// var 5kids = "five";   // eror se javlja zbog pocetnog broja kao naziv varijable


// 2. Save a string (text) describing your current mood in a variable and print it out in console.

var mood = "excited to learn JavaSkript";
console.log('I\'m so ' + mood); //Pod navodnicima  ide deo teksta koji se stampa ispred variable

//3. Feel free to play around in the console and get familiar with it.

console.log(undefined == null);   // isto je po vrednosti pa je proizvod true
console.log(undefined === null); // isto je po vrednosti ali nije po tipu, pa je proizvod false
console.log(false === "");      // isto je po vrednosti ali razlicito po tipu, pa je proizvod false

var $candle1 = 2e+2;
var $condor = "21"; 
console.log(typeof $candle1);
console.log(typeof $condor);
console.log($candle1 * $condor);  // 4200 je rezultat zato sto se 21 prepoznaje kao broj a ne kao string


                                 // Arithmetic operators //


// 4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
// stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
// Why do we get these results? 

var FirstNum = 3e1;
var SecondNum = 2.32;
var ThirdNum = 3;
console.log(FirstNum * ThirdNum - SecondNum);

var a = 3;
var b = 2;
var c = 31;
var all = 'a-b-c';
console.log(all);

var a = 3;
var b = 5;
var c = 7;
var d = 3;
console.log(a*b-c/d);

var a = 4
var b = 2
var c = 1.14
console.log(a/b-c*3);


// 5. How many grams weight 1.2kg of bananas?

var bananasKg = 1.2;
var gramsInKg = 1000;
var bananasInGr = bananasKg * gramsInKg;
console.log(bananasInGr + ' grams');


// 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
// about Tom who is being late half an hour? It is hard to be on time these days… 

var anna = 5;
var tom = 30;
var secondsInOneMinute = 60;
console.log('Ana is late ' + anna*secondsInOneMinute + ' seconds');
console.log('Tom is late ' + tom*secondsInOneMinute + ' seconds');


// 7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
// articles each in size 98KB can fit in it?

var myMemory = 4;
var mb = 1024;
var newsArticle = 98/1024; //KB U MB
console.log(myMemory*mb);
console.log(myMemory*mb/newsArticle);


//9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

var a = 3;
// console.log(a = a * 2); 
console.log(a *= 2)

var b = 3;
console.log(b += 3);

var c = 10;
console.log(c/=5);

var d=22;
console.log(d-=7);


// 10. Create the following variables:
               // - a variable containing your name,
               // - a variable containing your age,
               // - a variable describing if you have a cat or not.
               // Each variable has to start with a different type of character.
               // Print them all out in the console and check their types. 

var _myName = "Darko";
var $myAge = 41;
var cat;
console.log(typeof _myName);
console.log(typeof $myAge);
console.log(typeof cat);


// 11. Check which type are these values:
               // - “number”
               // - true
               // - null
               // - “false”
               // - 56 

console.log(typeof 'number' );

console.log(typeof true);
console.log(typeof null);
console.log(typeof 'false');
console.log(typeof 56);


                              // Logical operators //

// 12. Check how good you are at guessing the Boolean equivalent of different values using the
// console. Do you remember how to check for a Boolean equivalent of a value? 

var a = 'hat';
var b = 'hat';  // mora biti isti tekst ili isti broj da bi bilo true

console.log(a == b);


//13. Use the console to check the results you think should go in the following table:

var p=true;
var q=true;
console.log(p&&q);
console.log(p||q);

var p=true;
var q=false;
console.log(p&&q);
console.log(p||q);

var p=false;
var q=true;
console.log(p&&q);
console.log(p||q);

var p=false;
var q=false;
console.log(p&&q);
console.log(p||q);





// 14. If the variable age stores the information about user’s age, how we can check whether it
// contains a correct value? Write expressions for checking:
                    // ● Is age negative value
                    // ● Is age greater than 120

var age = 41;
if(age < 0 && age > 120) {
    console.log('Age is not correct value'); 
}
else {
    console.log('Age is correct value');
}

// MOZE I OVAKO, PRVI USLOV POZITIVAN 
var age = 41;
if(age >0 && age <=120) {
    console.log(true);
}
else{
    console.log(age + ' is false value');
} */


// 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
// we store the current speed value in the variable speed. Write an expression which will check if
// we are driving drive safely or not? (true if we are driving safe and false if not)

var mySpeed = 75;
var minSpeed = 60;
var maxSpeed = 120;
if(mySpeed >= minSpeed && mySpeed <= maxSpeed) { // dodajemo i a ne ili
    console.log("My speed is safe");
}
else {
    console.log("Current speed is not safe");
}