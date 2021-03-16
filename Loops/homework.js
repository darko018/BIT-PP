//Write a program that will iterate from 0 to 10 and display squares of numbers.

for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}


//1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
//number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++) {
    if (i%2==0 ) {
        console.log(i + ' is even number');
    } else {
        console.log(i + ' is odd number');
    }
}


//2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i%3==0 || i%5==0) {
        sum = sum + i;
    }
}
console.log(sum);


//3. Write a program to compute the sum and product of an array of integers.

var intg = [5, 6, 7, 8, 9, 10, 11];
var sum=0;
var product=1;
for (var i = 0; i < intg.length; i++) {
    sum = sum + intg[i];
    product = product * intg[i];
}

console.log('Sum:'+sum + ' Product:' +product);


//4. Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var single="";

for (var i = 0; i < x.length; i++) {
    single += x[i];
}

console.log(single);


//5. Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];

for (var i = 0; i < a.length; i++ ) {
    for (var x = 0; x < a[i].length; x++) {
        console.log(a[i][x]);
    }
}