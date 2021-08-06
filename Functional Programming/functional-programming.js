/************************************* FUNCTIONAL PROGRAMMING ************************************/


                                   // Imperative vs Declarative

// Declarative programming is a style of programming
// where applications are structured in a way that
// prioritizes describing what should happen over defining
// how it should happen

// Imperative programming, or a style of programming
// that is only concerned with how to achieve results with
// code



// Imperative

const array = [];

for (let i = 0; i < 10; i++) {
array.push(i);
}


//Declarative

const range = (from, to) => {
const array = [];
 for (let from = 0; from < to; from++) {
 array.push(from);
 }
 
return array;
};
 
const array = range(0, 10);



                                     // Mutable vs. Immuntable

//  Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

//  (You can make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.)

//  A mutable object is an object whose state can be modified after it is created.

//  Immutables are the objects whose state cannot be changed once the object is created.

//  Strings and Numbers are Immutable


//Mutable

const book = {
   title: "Game of Thrones",
   author: "George R. R. Martin",
   rating: 4
   };
   
   const rate = (book, rating) => {
   book.rating = rating;
   return book;
   };

   
// Immutable

const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
    };
    
const rate = (book, rating) => {
    return {...book, rating }
    };
     


                                   // Impure vs. Pure but mutable

//    An impure function is kind of the opposite of a pure one - it doesn't predictably produce the same result given the same inputs when called multiple times, and may cause side-effects. Let's have a look at some examples.                                   

//    A pure function must both be predictable and without side-effects. If either of these criteria is not met, we're dealing with an impure function.




// Impure 

const johnDoe = {
       name: "John Doe",
       canRead: false,
       canWrite: false
       };
       
const selfEducate = () => {
       johnDoe.canRead = true;
       johnDoe.canWrite = true;
       
       return johnDoe;
       };


// Pure but mutable

const johnDoe = {
         name: "John Doe",
         canRead: false,
         canWrite: false
         };
         
const selfEducate = person => {
         person.canRead = true;
         person.canWrite = true;
         
         return person;
         };



                                    //  Data Transformations

// Functional programming is all about transforming data from one form to another.
// These functions make our code less imperative and thus
// reduce complexity                                     

const users = ["John", "Jack", "Michael", "Tom", "Nicholas"];
const usersLowerCase = users.map(user => user.toLowerCase());

const usersWhoseNameStartWithJ = users.filter((user) => {

return user.startsWith("J")

})

const uniqueUsers = users.filter((user, index, array) => {

return array.indexOf(user) === index

});                                     


                                    // Higher-Order Functions

//  Higher-order functions are functions that can manipulate other functions
 
//  They can:
// - take functions in as arguments 
// - return functions
// - or do both

const checkLogin = (isLoggedIn, fnTrue, fnFalse) => {

    return isLoggedIn ? fnTrue() : fnFalse();
    }
    
const showWelcome = () => {
    console.log("Welcome!")
    }
    
const showUnauthorized = () => {
    console.log("Unauthorized!")
    }
    
checkLogin(true, showWelcome, showUnauthorized);
checkLogin(false, showWelcome, showUnauthorized);


                                        // Recursion

// Recursion is a technique that involves creating functions
// that recall themselves. Often when faced with a
// challenge that involves a loop, a recursive function can
// be used instead.

// Recursion is another functional technique that works
// well with asynchronous processes. Functions can recall
// themselves when they are ready.
// Recursion is a good technique for searching data
// structures.

// You can use recursion to iterate through subfolders until a folder that
// contains only files is identified.

// You can also use recursion to iterate through the HTML DOM until you
// find an element that does not contain any children.

const countdown = (value, fn) => {

    fn(value)
    
    return (value > 0) ? countdown(value - 1, fn) : value
}
countdown(10, value => console.log(value));



// Putting It All Together

// Following these three simple rules will help you stay on
// target

// Keep data immutable

// Keep functions pure—accept at least one
// argument, return data or another function

