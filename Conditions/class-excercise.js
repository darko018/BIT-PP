// // task 1


// var a = 3;
// var b = -7;
// var c = 2;
// if(a * b * c >0) {
//     console.log('+');
// } else {
//     console.log('-');
// }


// Task 2. 
        //  Write a conditional statement to find the largest of five numbers. Display the result in the
        //                                              console.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

var max = a;
// if (a>b && a>c && a>d && a>e){
//     console.log(a);
// } 
// else if (b>c && b>d && b>e){
//     console.log(b);
// }
// else if (c>d && c>e){
//     console.log(c);
// }
// else if (d>e){
//     console.log(d);
// }
// else { 
//     console.log(e);
// }

// if (b>max){
//     max = b;
// }
// if (c>max){
//     max = c;
// }
// if (d>max){
//     max = d;
// }
// if (e>max){
//     max = e;
// }
// console.log(max);

                                                // Task 6.
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F                                               
            
var C = 60;
var F;
var direction = 'F to C'; 

if(typeof F === 'undefined'){
    F = (9*C/5) + 32;
} else {
    C = (F-32)/ 1.8;
}
