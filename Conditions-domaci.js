//                                                // Task 1.
                //   Write a conditional statement to find the sign of product of three numbers. 
                //           Display theresult in the console with the specified sign.

var x=3;
var y=-7;
var z=2;

if (x>0 && y>0 && z>0)
{
    alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
        console.log("The sign is +");
        }
        else if (x>0 && y<0 && z<0)
        {
        console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
        console.log("The sign is +");
        }
        else
        {
        console.log("The sign is -");
        }

                                                     // Task 2. 
        //  Write a conditional statement to find the largest of five numbers. Display the result in the
        //                                              console.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a>b && a>c && a>d && a>e){
        console.log(a);
    } 
    else if (b>a && b>c && b>d && b>e){
        console.log(b);
    }
    else if (c>a && c>b && c>d && c>e){
        console.log(c);
    }
    else if (d>a && d>b && d>c && d>e){
        console.log(d);
    }
    else if (e>a && e>b && e>c && e>d){
        console.log(e);
    }

                                                         // Task 3.
                 // Write a conditional statement to print three numbers as sorted number list.                              

var a1= 0;
var b1=-1;
var c1= 4;

if (a1>b1 && a1>c1)
{
        if (b1>c1)
        {
            console.log(a1 + ", " + b1 + ", " +c1);
        }
        else
        {
            console.log(a1 + ", " + c1 + ", " +b1);
        }
}
else if (b1>a1 && b1 >c1)
{
        if (a1>c1)
        {
            console.log(b1 + ", " + a1 + ", " +c1);
        }
        else
        {
            console.log(b1 + ", " + c1 + ", " +a1);
        }
}
else if (c1>a1 && c1>b1)
{
        if (a1>b1)
        {
            console.log(c1 + ", " + a1 + ", " +b1);
        }
        else
        {
            console.log(c1 + ", " + b1 + ", " +a1);
        }
}   


                                             // Task 4. 

// Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X  
​
var a=10;
 if (typeof(a)==="number")
    {if ((a/2)===0)
        {console.log(a/2)}
 else console.log("x")}



                                              // Task 5. 
// Write a program that compares two numbers and displays the larger. Display the result in the console.

var a=66;
var b=41;
if (a>b){
    console.log("a");
}else (b>a)
    console.log("b")



                                             // Task 6. 
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F

var C;
var F=140; 

​if (!!C===true){ 
    console.log( F=(9*C/5)+32+" °F");} 
 else if (!!F===true){ 
    console.log(C=(F-32)*5/9+" °C");}



                                           // Task 7. 
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						    Output : 38
​
​
var a=32;
​
​if (a>13){
    if ((a-13)>13) {console.log((a-13)*2)
    } else {console.log(a-13)}
} else if (a<13){ console.log(a-13)}


                                              // Task 8. 
// Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48
​
var a=9;
var b=9;
​
if (a===b){console.log((a+b)*3)
} else {console.log(a+b)}


                                                   // Task 9. 
        // Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
​
// Output : -    Output : true    Output : true
​
var a=40;
var b=10;
​
if (a===50||b===50||a+b===50){
    console.log (true)
} else {console.log("-")}


                                                 // Task 10. 
// Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
​
var a=250;
​
if (a<100&&a>=20)
    {console.log("20⇔100")}
 else if (a<=400&&a>=100)
    {console.log("100⇔400")}
 else {console.log("-")}