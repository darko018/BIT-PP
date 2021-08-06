/************************************ CALL() and APPLY() ***********************************/

// You can use them to invoke a function and pass any arguments to it.
// These methods also allow your objects to "borrow" methods from other objects and 
// invoke them as their own. This is an easy and powerful way to reuse code.


let dudeObj = {
    job: 'Ninja',
    say: function (who) {
        return 'Hey ' + who + ', I am a ' + this.job;
    }
};
console.log(dudeObj.say('Dude')); // "Hey Dude, I am a Ninja"
  
let programmerObj = { job: 'Scripting guru' };
  
console.log(dudeObj.say.call(programmerObj, 'friend'));  // Hey friend, I am a Scripting guru
  
  
  
//   So, the second object "programmer", borrows methods from the first object "friend"
//   like: approching to "friend" method with call( OBJECT "programmer", "something which is ARRGUMENT to method "x"  
//   and also change "this" of the object friend into "director" instead "students") 
//   call(this_obj, p1, p2, p3,...) accepts arguments one by one
   
  
  
let friend = {
    job: "profesor",
    teaching: function(x){
      return `Hey ${x} I am a ${this.job}`
    }
}
console.log(friend.teaching("students"));
  
  
let programmer = {
    job: "JavaScript expert"
}
console.log(friend.teaching.call(programmer, "director"));
  
  /******************************************************/
  
function printName ( name, surname) { 

 console.log(`${name} ${surname}`);
}

printName("Margot", "Robbie"); 
printName.call( {job: "actress"}, "Jenifer", "Aniston" ); 




/*********************************** APPLY METHOD ****************************************/
   
//  Allows you to call another function while overwriting the other function's this value. 
//  The first parameter that apply() accepts is the object to be bound to this inside the function
//  and the second is an array of arguments to be sent to the function being called.
//  apply(this_obj, parameters_array)

 
function sum ( a, b) {
  return a + b;
}

const result = sum.apply( null , [5, 15]); 
console.log(result);
/* in this example, we call apply() method, and on the second parameters we put an array [5,15]
and function sum take those and return 5+15=20; null is some object which will change this of the function sum  */

/* So, we are creating an object on the first parameter and "this" from function sum got it as object.*/
function sum ( a, b) {
  console.log(this);  //{ job: 'student' }
  return a + b;
}

const result = sum.apply( {job: "student"} , [5, 15]); 
console.log(result); // 20

/****************************************** BIND () *****************************************/

/* This method includes:
1. Bind an object to a function. 
2. Reference it using "this"
*/

// first object literal:

let coordinates_1 = {
  x: 5,
  y: 10
};

//second object literal:

let coordinates_2 = {
  x: 75,
  y: 235
};

//function:

function printCooridinates(){
  console.log('Coordinates are ' +  this.x + ' and ' + this.y);
}

// variable instance of function printCoordinates:

let c1_func = printCooridinates.bind(coordinates_1);
let c2_func = printCooridinates.bind(coordinates_2);
c1_func(); // 5 and 10
c2_func(); // 75 and 235

/* if princtCoordinates() has no arguments "this" refers to global Windows object
   console.log(this) --> Windows{....}
   if we put values:
   
    windows.x = 65; 
    windows.y = 300;
    // 65 and 300
*/